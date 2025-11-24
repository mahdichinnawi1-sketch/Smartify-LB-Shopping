import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../images/login.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }
    navigate("/home");
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${loginImg})` }}
    >
      <div className="login-box">
        <h1>Smartify LB</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
