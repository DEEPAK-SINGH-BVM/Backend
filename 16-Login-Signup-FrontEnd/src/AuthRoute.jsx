import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  return decodedToken.exp < Date.now() / 1000;
};

const AuthRoute = ({ children }) => {
  // const navigate = Navigate();
  const token = localStorage.getItem("token");
  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token")
    return children;
  }

  const { role } = jwtDecode(token);
  if (role === "superadmin") return <Navigate to="/superDashboard" />;
  if (role === "admin") return <Navigate to="/adminDashboard" />;
  if (role === "user") return <Navigate to="/userDashboard" />;
};

export default AuthRoute;
