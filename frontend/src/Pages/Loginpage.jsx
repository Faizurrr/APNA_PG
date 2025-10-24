// Pages/Loginpage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifyResult, setVerifyResult] = useState(null);
  const [homepageMessage, setHomepageMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setVerifyResult(null);
    setHomepageMessage(null);
    setLoading(true);

    try {
      console.log("Sending login data:", formData);

      // -------- Login request --------
     const API_URL = "https://apna-pg-in.onrender.com"; // url of backend which is live at render
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        setError("Server returned invalid response");
        return;
      }

      console.log("Login response:", data);

      if (response.ok && data.token) {
        setSuccess(data.message || "Login successful ✅");

        localStorage.setItem("token", data.token);
        console.log("Token saved:", data.token);

        // -------- Verify token safely --------
        try {
          const verifyResponse = await fetch(`${API_URL}/verify`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          });
          const verifyData = await verifyResponse.json();
          console.log("Verify result:", verifyData);
          setVerifyResult(verifyData);
        } catch (err) {
          console.error("Verify error:", err);
          setVerifyResult({ valid: false, message: "Could not verify token" });
        }

        // -------- Call protected homepage safely --------
        try {
          const homepageResponse = await fetch(`${API_URL}/homepage`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          });
          const homepageData = await homepageResponse.json();
          console.log("Homepage response:", homepageData);
          setHomepageMessage(homepageData.message);
        } catch (err) {
          console.error("Homepage error:", err);
          setHomepageMessage("Could not access homepage");
        }

        // Redirect to your frontend homepage route
        navigate("/Homepage");

      } else {
        setError(data.message || "Login failed ❌");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Network/server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md mt-25 rounded-lg p-6 w-90 h-110 flex flex-col mb-29"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login Page
        </h1>
       <img src="/logo1.jpg" alt="Logo image" 
        className="h-22 w-22 ml-27 pb-5"
        />

        {error && <p className="text-red-500 mb-1 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-1 text-center">{success}</p>}
        {verifyResult && (
          <p className="text-blue-500 mb-3 text-center">
            Verify: {verifyResult.valid ? "Valid" : "Invalid"} - {verifyResult.message || ""}
          </p>
        )}
        {homepageMessage && (
          <p className="text-purple-500 mb-3 text-center">{homepageMessage}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border mt-10 border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
