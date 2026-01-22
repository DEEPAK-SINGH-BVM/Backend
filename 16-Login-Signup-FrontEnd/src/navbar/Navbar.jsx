import { useNavigate, useLocation, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const decode = token ? jwtDecode(token) : null;
  console.log("decodeNavbar",decode);
  
  const role = decode?.role;
  console.log("role",role);
  
  const firstName = decode?.firstName;
  const lastName = decode?.lastName;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#dadada",
      }}
    >
      {token ? (
        <>
          <div>
            Welcome , {firstName}
            {lastName}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            {(role === "superadmin" || role === "admin" || role === "user" ) && location.pathname !== "/dashboard" &&  (
              <Link
                to="/dashboard"
                style={{
                  fontSize: "15px",
                  padding: "10px",
                  backgroundColor: "gray",
                  borderRadius: "5px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                User Dashboard
              </Link>
            )}
            {location.pathname === "/dashboard" && (
              <button
                onClick={() => history.back()}
                style={{
                  fontSize: "15px",
                  padding: "10px",
                  backgroundColor: "gray",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Back
              </button>
            )}
            <button
              onClick={handleLogout}
              style={{
                fontSize: "15px",
                padding: "10px",
                backgroundColor: "gray",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
          {location.pathname === "/login" && (
            <button
              onClick={() => navigate("/")}
              style={{
                fontSize: "15px",
                padding: "10px",
                backgroundColor: "gray",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Signup
            </button>
          )}
          {location.pathname === "/" && (
            <button
              onClick={() => navigate("/login")}
              style={{
                fontSize: "15px",
                padding: "10px",
                backgroundColor: "gray",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Login
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
