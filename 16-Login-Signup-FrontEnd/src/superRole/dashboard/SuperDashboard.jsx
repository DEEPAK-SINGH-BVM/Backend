import { Link, Outlet, useNavigate } from "react-router-dom";

const SuperDashboard = () => {
  // const navigate = useNavigate();
  //  const handleLogout = () => {
  //    localStorage.removeItem("token");
  //    navigate("/login");
  //  };
   
  return (
    <div>
      {/* <button onClick={handleLogout}>LogOut</button><br /> */}
      Super Admin Dashboard
      <Outlet/>
    </div>
  );
};

export default SuperDashboard;