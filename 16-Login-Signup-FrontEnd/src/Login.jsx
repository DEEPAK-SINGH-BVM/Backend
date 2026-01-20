import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  console.log(email, "Email");
  const [password, setPassword] = useState("");
  console.log(password, "Password");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

      const response = await axios.post("http://localhost:7070/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      let token = localStorage.getItem("token");
      const { role:userRole } = jwtDecode(token);
      console.log("Role of User:", userRole);
    
      if (userRole == "superadmin") {
         navigate("/superDashboard");
      } else if (userRole == "admin") {
         navigate("/adminDashboard");
      } else if (userRole == "user") {
         navigate("/userDashboard");
      }
      console.log("Login successfully  !!");

  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <label htmlFor="">Email : </label>
      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /> <br />
      <label htmlFor="">Password : </label>
      <input
        type="text"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Login </button>
      <br />
      <br />
      <a
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
        className="login-btn"
      >
        Go to signup
      </a>
    </form>
  );
};

export default Login;
