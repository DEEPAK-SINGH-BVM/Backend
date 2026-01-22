import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  return decodedToken.exp < Date.now() / 1000;
};

const superRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("tokennnn", token);
  
  if (!token || isTokenExpired(token)) {
    return <Navigate to="/login" />;
  }

  const { role } = jwtDecode(token);
  if (role !== "superadmin") {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
  
export default superRoute;