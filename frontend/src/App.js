// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import Login from './pages/Login'; // Import your Login page
import Signup from './pages/Signup'; // Import your Signup page

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/login" element={<Login />} /> {/* Add route for Login */}
        <Route path="/signup" element={<Signup />} /> {/* Add route for Signup */}
      </Routes>
    </Router>
  );
}

export default App;
