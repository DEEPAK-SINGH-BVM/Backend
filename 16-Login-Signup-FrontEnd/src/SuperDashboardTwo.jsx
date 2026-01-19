import { useNavigate } from 'react-router-dom';

const SuperDashboardTwo = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div>Super Admin Dashboard Two</div>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
}

export default SuperDashboardTwo