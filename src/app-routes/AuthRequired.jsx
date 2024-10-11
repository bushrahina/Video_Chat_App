import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const token = localStorage.getItem("login-system");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default AuthRequired;