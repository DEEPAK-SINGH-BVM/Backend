import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const superRoute = ({children}) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" />;
  }
  const { role } = jwtDecode(token);
   if (role == "superadmin") {
     return children;
   }
   else{
      return history.back();
   }
};

export default superRoute;

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     return children;
//   }
// };

// import { jwtDecode } from "jwt-decode";
// import { Navigate } from "react-router-dom";
// import SuperDashboard from "./SuperDashboard";
// import AdmindashBoard from "./AdmindashBoard";
// import UserDashboard from "./UserDashboard";

// const ProtectedRoute = () => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     return <Navigate to="/signup" />;
//   }

//   console.log("Token", token);
//   const { role } = jwtDecode(token);

//   if (role == "superadmin") {
//     return (
//       <>
//         <SuperDashboard />
//       </>
//     );
//   } else if (role == "admin") {
//     return <AdmindashBoard />;
//   } else if (role == "user") {
//     return <UserDashboard />;
//   }
// };

// export default ProtectedRoute;
