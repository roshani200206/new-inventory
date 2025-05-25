import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await login(email, password);
      alert("Logged in as: " + data.data.email);
      navigate("/");  // Use navigate here instead of <Navigate />
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
