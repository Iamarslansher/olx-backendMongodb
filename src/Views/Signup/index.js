// SignupForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await fetch("http://localhost:3001/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((res) => alert(res));
      navigate("/Dashboard");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="main-container">
      <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button onClick={submit}>Sign Up</button>
          <p style={{ textAlign: "center" }}>
            Already have an account
            <a
              style={{ fontSize: 20, fontWeight: "bold", marginLeft: 5 }}
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
