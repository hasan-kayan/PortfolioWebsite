import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
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
        const response = await axios.get(`/api/auth/verify`, {
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

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Loader2 className="h-12 w-12 text-indigo-500 animate-spin" />
      <p className="mt-4 text-xl font-medium">Verifying authentication...</p>
    </div>
  );

  return isValid ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;