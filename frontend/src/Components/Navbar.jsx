import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false); // logged in state

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser(true);
    else setUser(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(false);
    navigate("/Loginpage");
  };

  return (
    <nav className="bg-white shadow-md w-full h-20 ">
    <div className="flex items-center justify-between p-4">
  {/* Logo */}
 <div 
  className="flex items-center space-x-3 "

><img
  src="/logo1.jpg"
  alt="Apna PG Logo"
  className="w-16 h-16"
/>

</div>



        {/* Menu Items */}
        <ul className="flex space-x-7 justify content-center">
          <li className="text-gray-600 hover:text-yellow-600 cursor-pointer font-medium transition-colors duration-300">
            <Link to="/Homepage">Home</Link>
          </li>
          <li className="text-gray-600 hover:text-yellow-600 cursor-pointer font-medium transition-colors duration-300">
            <Link to="/Aboutpage">About_us</Link>
          </li>

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 text-sm sm:text-base"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/Loginpage"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 text-sm sm:text-base"
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}
