// components/ProtectedRoute.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute checks token validity by calling backend /verify.
 * If valid -> render children, else redirect to login ("/").
 */
export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsValid(false);
        setLoading(false);
        return;
      }

      try {
        const resp = await fetch("http://127.0.0.1:5000/verify", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (resp.ok) {
          const data = await resp.json();
          if (data.valid) setIsValid(true);
          else setIsValid(false);
        } else {
          setIsValid(false);
        }
      } catch (err) {
        console.error("Verify error:", err);
        setIsValid(false);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  if (loading) return <div>Checking authentication...</div>;
  if (!isValid) return <Navigate to="/" replace />;
  return <>{children}</>;
}
