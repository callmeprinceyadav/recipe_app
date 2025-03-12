// src/pages/Login.js
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simulate a login attempt
    if (email === 'test@example.com' && password === 'password123') {
      const userData = { email, token: 'fake-jwt-token' }; // Simulate the token
      localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
      window.location.href = '/';  // Redirect to the home page after login
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
