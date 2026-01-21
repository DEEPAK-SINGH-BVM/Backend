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
  // const [firstName, setFirstName] = useState("");
  // console.log(firstName, "Name");
  //  const [lastName, setLastName] = useState("");
  //  console.log(lastName, "Name");
  // const [email, setEmail] = useState("");
  // console.log(email, "Email");
  // const [password, setPassword] = useState("");
  // console.log(password, "Password");
  // const [gender, setGender] = useState("");
  // console.log(gender, "gender");
  // const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
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
     } catch (error) {
       console.log("ERROR MESSAGE", error.response.data.message);
       alert(error.response.data.message);
     }
  };
  return (
    <div>
      <Navbar/>
      <br />
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
        <label htmlFor="">First Name : </label>
        <input
          type="text"
          value={formData.firstName}
          placeholder="Enter First Name"
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <br />
        <br />
        <label htmlFor="">Last Name : </label>
        <input
          type="text"
          value={formData.lastName}
          placeholder="Enter Last Name"
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <br />
        <br />
        <label htmlFor="">Email : </label>
        <input
          type="email"
          value={formData.email}
          placeholder="Enter Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <br />
        <label htmlFor="">Password : </label>
        <input
          type="text"
          value={formData.password}
          placeholder="Enter Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <br />
        <br />
        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <option value="" disabled>
            Select gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <br />
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="" disabled>
            Select Role
          </option>
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
