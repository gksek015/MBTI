import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = !!user;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
