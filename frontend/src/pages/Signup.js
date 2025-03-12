import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css"; // Import the CSS file

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (email && password) {
      const userData = { email, token: "fake-jwt-token" };
      localStorage.setItem("user", JSON.stringify(userData));
      window.location.href = "/";
    } else {
      setError("Please fill out all fields");
    }
  };

  return (
    <>
    <nav className="bg-gray-600 text-white p-2">
        <h1 className="text-xl font-semibold">Recipe App</h1>
        </nav>
    <div className="auth-container">
      <div className="auth-box">
        <h1>Signup</h1>
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
        <button onClick={handleSignup}>Signup</button>
        {error && <p className="error-message">{error}</p>}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Signup;
