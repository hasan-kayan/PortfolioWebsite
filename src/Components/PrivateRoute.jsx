import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AUTH_URL = import.meta.env.VITE_AUTH_URL;

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsValid(false);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${AUTH_URL}/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch (err) {
        console.warn("🔐 Token invalid or expired.");
        localStorage.removeItem("token");
        setIsValid(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  if (loading) return <div className="text-center py-10 text-white">Checking authentication...</div>;

  return isValid ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
