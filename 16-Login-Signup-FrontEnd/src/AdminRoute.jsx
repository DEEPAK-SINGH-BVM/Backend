import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" />;
  }
  const { role } = jwtDecode(token);
  if (role == "admin" || role == "superadmin") {
    return children;
  } else {
    return history.back();
  }
};

export default AdminRoute;
