import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem('user') !== null;
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/'; // Redirect to the homepage after logging out
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Recipe App</h1>

        {/* Right Side Navbar */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-white">Welcome, {user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-gray-400 px-4 py-2 rounded-lg"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-gray-400 px-4 py-2 rounded-lg"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
