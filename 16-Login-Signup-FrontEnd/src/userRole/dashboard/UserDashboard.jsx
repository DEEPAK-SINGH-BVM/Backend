
import { Outlet, useNavigate } from "react-router-dom";

const UserDashboard = () => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // };
  return (
    <>
      <div>UserDashboard</div>
      {/* <button onClick={handleLogout}>LogOut</button> */}
      <Outlet />
    </>
  );
};

export default UserDashboard;
