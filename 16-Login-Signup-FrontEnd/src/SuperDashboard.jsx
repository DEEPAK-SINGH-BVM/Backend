import { useNavigate } from "react-router-dom";

const SuperDashboard = () => {
  const navigate = useNavigate();
   const handleLogout = () => {
     localStorage.removeItem("token");
     navigate("/login");
   };
   
  return (
    <div>
      <button onClick={handleLogout}>LogOut</button>
      Super Admin Dashboard
    </div>
  );
};

export default SuperDashboard;
