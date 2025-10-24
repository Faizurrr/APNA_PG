// Pages/SignupPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
           const API_URL = "https://apna-pg-in.onrender.com"; 
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Signup successful ✅");
        navigate("/Loginpage");
      } else {
        setError(data.message || "Signup failed ❌");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-teal-100 to-blue-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-96 flex flex-col"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h1>
        <img src="/logo1.jpg" alt="logo img "
          className="h-22 w-22 ml-29 pb-4"
        />

        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-3 text-center">{success}</p>}

        
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/Loginpage")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
}
