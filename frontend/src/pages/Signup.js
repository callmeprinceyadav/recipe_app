// src/pages/Signup.js
import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    // Simulate a signup attempt
    if (email && password) {
      const userData = { email, token: 'fake-jwt-token' }; // Simulate the token
      localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
      window.location.href = '/';  // Redirect to home page after signup
    } else {
      setError('Please fill out all fields');
    }
  };

  return (
    <div className="signup">
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
      {error && <p>{error}</p>}
    </div>
  );
}

export default Signup;
