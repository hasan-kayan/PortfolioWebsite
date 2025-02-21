import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const authToken = localStorage.getItem("authToken");

  return authToken ? <Outlet /> : <Navigate to="/login" />;
}
