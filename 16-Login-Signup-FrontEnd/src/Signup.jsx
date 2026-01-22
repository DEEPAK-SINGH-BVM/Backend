import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Navbar from "./navbar/Navbar";
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    role: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
   const validate = () => {
      let newErrors = {};

      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.role) newErrors.role = "Role is required";

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    //  try {
       // validation
       const response = await axios.post(
         "http://localhost:7070/users/signup",
         formData,
       );
       setFormData({
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         gender: "",
         role: "",
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
    //  } catch (error) {
    //    console.log("ERROR MESSAGE", error.response.data.message);
    //    alert(error.response.data.message);
    //  }
  };
  return (
    <div>
      <Navbar />
      <br />
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
        <label htmlFor="">First Name : </label>
        <input
          type="text"
          value={formData.firstName}
          placeholder="Enter First Name"
          onChange={(e) => 
            setFormData({ ...formData, firstName: e.target.value })}
        />
        <span className="error" style={{ color: "red" }}>
          {errors.firstName}
        </span>
        <br />
        <br />
        <label htmlFor="">Last Name : </label>
        <input
          type="text"
          value={formData.lastName}
          placeholder="Enter Last Name"
          onChange={(e) => 
            setFormData({ ...formData, lastName: e.target.value })}
        />
        <span className="error" style={{ color: "red" }}>
          {errors.lastName}
        </span>
        <br />
        <br />
        <label htmlFor="">Email : </label>
        <input
          type="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={(e) => 
            setFormData({ ...formData, email: e.target.value })}
        />
        <span className="error" style={{ color: "red" }}>
          {errors.email}
        </span>
        <br />
        <br />
        <label htmlFor="">Password : </label>
        <input
          type="text"
          value={formData.password}
          placeholder="Enter Password"
          onChange={(e) => 
            setFormData({ ...formData, password: e.target.value })}
        />
        <span className="error" style={{ color: "red" }}>
          {errors.password}
        </span>
        <br />
        <br />
        <select
          value={formData.gender}
          onChange={(e) => 
            setFormData({ ...formData, gender: e.target.value })}
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span className="error" style={{ color: "red" }}>
          {errors.gender}
        </span>
        <br />
        <br />
        <select
          value={formData.role}
          onChange={(e) => 
            setFormData({ ...formData, role: e.target.value })}
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="user">user</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Super Admin</option>
        </select>
        <span className="error" style={{ color: "red" }}>
          {errors.role}
        </span>
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
