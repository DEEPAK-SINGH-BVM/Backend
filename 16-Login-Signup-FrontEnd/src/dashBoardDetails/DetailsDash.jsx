import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
const UserDashboard = () => {
  const [user, setUser] = useState([]);
  console.log("user", user);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:7070/users");
        setUser(response.data.users);
      } catch (error) {
        console.log("Error to get user", error);
      }
    };

    fetchUser();
  },[]);

  const superAdmin = user.filter((u) => u.role === "superadmin").length;
  console.log("superAdminCount", superAdmin);
  
  const adminRole = user.filter((u)=> u.role === "admin").length;
  console.log("Admin",adminRole);

  const userRole = user.filter((u) => u.role === "user").length;
  console.log("User", userRole);
  
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <div
          style={{
            fontSize: "15px",
            padding: "10px",
            backgroundColor: "lightgray",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
          }}
        >
          <h3>SuperAdmin</h3>
          <p>{superAdmin}</p>
        </div>
        <div
          style={{
            fontSize: "15px",
            padding: "10px",
            backgroundColor: "lightgray",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
          }}
        >
          <h3>Admin</h3>
          <p>{adminRole}</p>
        </div>
        <div
          style={{
            fontSize: "15px",
            padding: "10px",
            backgroundColor: "lightgray",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100px",
            textAlign: "center",
          }}
        >
          <h3>User</h3>
          <p>{userRole}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;