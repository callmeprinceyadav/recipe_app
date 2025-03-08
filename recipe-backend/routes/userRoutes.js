// /routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// Define user-related routes
router.post('/register', registerUser);  // Register a new user
router.post('/login', loginUser);        // Login a user

module.exports = router;
