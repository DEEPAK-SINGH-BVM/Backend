import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  console.log(name, "Name");
  const [email, setEmail] = useState("");
  console.log(email, "Email");
  const [password, setPassword] = useState("");
  console.log(password, "Password");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
     // validation
    try {
      const response = await axios.post("http://localhost:7070/users/signup", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
      console.log("Signup Successfully !!");
    } catch (error) {
      alert(error.response.data.message)
    }
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
        <button type="submit">Submit</button>
        <br />
        <br /><a style={{ cursor: "pointer" }} onClick={() => navigate("/login")} className="login-btn">  Go to Login</a>
      </form>
    </div>
  );
};

export default Signup;
