// LoginForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA4N2I4MjI4ODc0ODhiMWI1ZmE1YWYiLCJpYXQiOjE3MTE5OTY5ODl9.PwiER6gvQjOoAVPtg2aLI3JRJ17khEhVB2pZORbLysM"

        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((res) => 
          console.log(res.message));
      navigate("/Dashboard");
    } catch (error) {
      return alert(error);
    }
  };

  return (
    <div className="main_container">
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button onClick={submit}>Login</button>
          <p style={{ textAlign: "center" }}>
            Don't have an account{" "}
            <a
              style={{ fontSize: 20, fontWeight: "bold", fontStyle: "italic" }}
              onClick={() => navigate("/")}
            >
              Signup
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
