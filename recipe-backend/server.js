// /server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors')

dotenv.config();
connectDB();  // Connect to MongoDB

const app = express();
app.use(express.json());  // Middleware for parsing JSON request bodies

app.use(cors({
    origin: ['https://recipe-app-bacckendd.vercel.app','http://localhost:3000', 'https://recipe-app-frrontennd.vercel.app','https://recipe-app-bacckendd.vercel.app/api/recipes/search?query=chicken&diet=vegetarian' ],
    credentials: true,
  }));

// Set up routes
app.use('/api/users', userRoutes);  // User-related routes (e.g., /register, /login)
app.use('/api/recipes', recipeRoutes);  // Recipe-related routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
