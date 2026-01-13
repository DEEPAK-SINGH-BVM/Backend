import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./Login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  console.log(email, "Email");
  const [password, setPassword] = useState("");
  console.log(password, "Password");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:7070/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
      console.log("Login successfully  !!");
    } catch (error) {
      console.log("Error in Login ");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Email : </label>
      <input
        type="email"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /> <br />
      <label>Password : </label>
      <input
        type="text"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Login</button>
      <br />
      <br />
      <button
        type="button"
        style={{
          backgroundColor: "#4285F4",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          // Redirect to backend Google login route
          window.location.href = "http://localhost:5000/auth/google";
        }}
      >
        Continue with Google
      </button>
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
