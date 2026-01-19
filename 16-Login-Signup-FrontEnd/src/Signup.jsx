import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
// import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  console.log(name, "Name");
  const [email, setEmail] = useState("");
  console.log(email, "Email");
  const [password, setPassword] = useState("");
  console.log(password, "Password");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    const response = await axios.post("http://localhost:7070/users/signup", {
      name,
      email,
      password,
      role,
    });
    localStorage.setItem("token", response.data.token);
    let token = localStorage.getItem("token");
    const { role: userRole } = jwtDecode(token);
    console.log("Role of User:", userRole);

    if (userRole == "superadmin") {
      navigate("/superDashboard");
    } else if (userRole == "admin") {
      navigate("/adminDashboard");
    } else if (userRole == "user") {
      navigate("/userDashboard");
    }
    console.log("role", role);

    console.log("token", token);

    console.log("Signup Successfully !!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="">Name : </label>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Email : </label>
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Password : </label>
        <input
          type="text"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">user</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Super Admin</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <a
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/login")}
          className="login-btn"
        >
          Go to Login
        </a>
      </form>
    </div>
  );
};

export default Signup;
