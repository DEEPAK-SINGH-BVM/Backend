import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  return decodedToken.exp < Date.now() / 1000;
};

const UserRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token || isTokenExpired(token)) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default UserRoute;
