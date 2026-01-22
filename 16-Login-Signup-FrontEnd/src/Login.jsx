import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { jwtDecode } from "jwt-decode";
import "./Login.css";
const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validate()) return;
    try {
      const response = await axios.post("http://localhost:7070/users/login",formData );
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
       setFormData({
         email: "",
         password: "",
       });
      console.log("Login successfully  !!");
    } catch (error) {
        console.log('error message:',error);
        
        alert(error.response.data.message)
    }
  };
     const validate = () => {
       let newErrors = {};
       if (!formData.email) newErrors.email = "Email is required";
       if (!formData.password) newErrors.password = "Password is required";

       setErrors(newErrors);
       return Object.keys(newErrors).length === 0;
     };
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <label htmlFor="">Email : </label>
        <input
          type="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <span className="error" style={{ color: "red" }}>
          {errors.email}
        </span>
        <br /> <br />
        <label htmlFor="">Password : </label>
        <input
          type="text"
          value={formData.password}
          placeholder="Enter Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <span className="error" style={{ color: "red" }}>
          {errors.password}
        </span>
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
    </div>
  );
};

export default Login;
