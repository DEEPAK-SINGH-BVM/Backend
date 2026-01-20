import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  console.log(firstName, "Name");
   const [lastName, setLastName] = useState("");
   console.log(lastName, "Name");
  const [email, setEmail] = useState("");
  console.log(email, "Email");
  const [password, setPassword] = useState("");
  console.log(password, "Password");
  const [gender, setGender] = useState("");
  console.log(gender, "gender");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    const response = await axios.post("http://localhost:7070/users/signup", {
      firstName,
      lastName,
      email,
      password,
      gender,
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
        <h2 >Signup</h2>
        <label htmlFor="">First Name : </label>
        <input
          type="text"
          value={firstName}
          placeholder="Enter First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Last Name : </label>
        <input
          type="text"
          value={lastName}
          placeholder="Enter Last Name"
          onChange={(e) => setLastName(e.target.value)}
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
        <label htmlFor="">Last Name : </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
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
