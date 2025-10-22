from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import bcrypt
import jwt
import datetime
import os
from dotenv import load_dotenv
app = Flask(__name__)
CORS(app, supports_credentials=True)
app.url_map.strict_slashes = False

# SECRET_KEY: change this in production and keep it secret (env var)
SECRET_KEY = os.getenv("JWT_SECRET")
load_dotenv()


def get_db_connection():
    return psycopg2.connect(
        host=os.getenv("DB_HOST"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        port=os.getenv("DB_PORT")
    )




# --------- helper: create jwt token (2 hours) ----------
def create_token(email):
    exp = datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    payload = {"email": email, "exp": exp}
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    if isinstance(token, bytes):
        token = token.decode("utf-8")
    return token

@app.route('/')
def home():
    return ("backend server is working ") , 200

# --------- Signup ----------
@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.get_json(force=True)
        email = data.get("email")
        password = data.get("password")

        if not email or password is None:
            return jsonify({"message": "Email and password are required"}), 400

        password = str(password)
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        conn = get_db_connection()
        try:
            with conn:
                with conn.cursor() as cur:
                    cur.execute("SELECT id FROM users WHERE email = %s;", (email,))
                    if cur.fetchone():
                        return jsonify({"message": "User already exists"}), 409

                    cur.execute(
                        "INSERT INTO users (email, password) VALUES (%s, %s);",
                        (email, hashed_password)
                    )
        finally:
            conn.close()

        return jsonify({"message": "User registered successfully!"}), 201

    except psycopg2.Error as db_err:
        print("❌ PostgreSQL error:", db_err)
        return jsonify({"message": "Database error", "detail": str(db_err)}), 500
    except Exception as e:
        print("❌ Server error:", repr(e))
        return jsonify({"message": "Server error", "error": str(e)}), 500


# --------- Login ----------
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json(force=True)
        email = data.get("email")
        password = data.get("password")

        if not email or password is None:
            return jsonify({"message": "Email and password are required"}), 400

        password = str(password)
        conn = get_db_connection()
        user_row = None
        try:
            with conn:
                with conn.cursor() as cur:
                    cur.execute("SELECT id, password FROM users WHERE email = %s;", (email,))
                    user_row = cur.fetchone()
        finally:
            conn.close()

        if not user_row:
            return jsonify({"message": "User not found"}), 404

        stored_hashed = user_row[1]
        if isinstance(stored_hashed, str):
            stored_hashed = stored_hashed.encode('utf-8')

        if bcrypt.checkpw(password.encode('utf-8'), stored_hashed):
            token = create_token(email)
            return jsonify({"message": "Login successful", "token": token}), 200
        else:
            return jsonify({"message": "check your email and password"}), 401

    except psycopg2.Error as db_err:
        print("❌ PostgreSQL error:", db_err)
        return jsonify({"message": "Database error", "detail": str(db_err)}), 500
    except Exception as e:
        print("❌ Server error:", repr(e))
        return jsonify({"message": "Server error", "error": str(e)}), 500


# --------- Verify token ----------
@app.route('/verify', methods=['GET'])
def verify():
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({"valid": False, "message": "Missing token"}), 401

    token = auth_header.split(" ")[1] if " " in auth_header else auth_header

    try:
        decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return jsonify({"valid": True, "email": decoded.get("email")}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({"valid": False, "message": "Token expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"valid": False, "message": "Invalid token"}), 401
    except Exception as e:
        return jsonify({"valid": False, "message": str(e)}), 400


# --------- Owner Data ----------
@app.route('/ownerdata', methods=['POST'])
def ownerpage():
    try:
        data = request.get_json(force=True)

        owner_name = data.get("owner_name")
        phone_number = str(data.get("phone_number"))
        email_address = data.get("email_address")
        amenities = data.get("amenities")
        full_address = data.get("full_address")
        city = data.get("city")
        state = data.get("state")
        room_type = data.get("room_type")
        monthly_rent = float(data.get("monthly_rent")) if data.get("monthly_rent") else None
        security_deposit = float(data.get("security_deposit")) if data.get("security_deposit") else None
        available_from = data.get("available_from")
        image_urls = data.get("image_urls")

        conn = get_db_connection()
        cur = conn.cursor()       

        insert_query = """
        INSERT INTO pg_listings 
        (owner_name, phone_number, email_address, amenities, full_address, city, state, room_type, monthly_rent, security_deposit, available_from, image_urls)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        RETURNING id;
        """

        cur.execute(insert_query, (
            owner_name, phone_number, email_address, amenities,
            full_address, city, state, room_type,
            monthly_rent, security_deposit, available_from, image_urls
        ))

        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"message": "PG Listed Successfully!", "pg_id": new_id}), 201

    except Exception as e:
        if 'conn' in locals():
            conn.rollback()
            conn.close()
        return jsonify({"error": str(e)}), 500


# --------- Protected homepage ----------
@app.route('/homepage', methods=['GET'])
def homepage():
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({"message": "Missing token"}), 401
    token = auth_header.split(" ")[1] if " " in auth_header else auth_header
    try:
        decoded = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        email = decoded.get("email")
        return jsonify({"message": f"Welcome to homepage, {email}!"}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({"message": "Token expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"message": "Invalid token"}), 401
    except Exception as e:
        return jsonify({"message": str(e)}), 400


# --------- 🆕 Search PGs Route ----------
@app.route('/api/pgs', methods=['GET'])
def search_pgs():
    try:
        location = request.args.get("location", "").strip()
        price_range = request.args.get("price", "")

        conn = get_db_connection()
        cur = conn.cursor()

        # Base query
        query = "SELECT id, owner_name, phone_number, email_address, full_address, city, monthly_rent FROM pg_listings WHERE LOWER(full_address) LIKE LOWER(%s)"
        params = [f"%{location}%"]

        # If price range provided
        if price_range:
            parts = price_range.split("-")
            if len(parts) == 2:
                min_price, max_price = map(float, parts)
                query += " AND monthly_rent BETWEEN %s AND %s"
                params.extend([min_price, max_price])

        cur.execute(query, tuple(params))
        rows = cur.fetchall()

        result = [
            {
                "id": r[0],
                "owner_name": r[1],
                "phone_number":r[2],
                "email": r[3],
                "address": r[4],
                "city": r[5],
                "price": r[6],
                
                
            }
            for r in rows
        ]

        cur.close()
        conn.close()

        return jsonify(result), 200

    except Exception as e:
        print("❌ Error in /api/pgs:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
