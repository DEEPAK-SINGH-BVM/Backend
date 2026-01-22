import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const isTokenExpired = (token)=>{
    const decodeToken = jwtDecode(token);
    return decodeToken.exp < Date.now() / 1000;
}

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token || isTokenExpired(token)) {
    return <Navigate to="/login" />;
  }
  const { role } = jwtDecode(token);
  if (role == "admin" || role == "superadmin") {
    return children;
  } else {
    return history.back();
  }
};

export default AdminRoute;
