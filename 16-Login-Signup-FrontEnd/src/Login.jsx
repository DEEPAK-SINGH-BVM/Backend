import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login : </button>
    </form>
  );
};

export default Login;
