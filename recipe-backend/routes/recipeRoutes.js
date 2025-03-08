// /routes/recipeRoutes.js
const express = require('express');
const { fetchRecipes, fetchRecipeDetails } = require('../controllers/recipeController');
const router = express.Router();

// Route to search for recipes
router.get('/search', fetchRecipes);

// Route to get detailed information about a recipe
router.get('/:id', fetchRecipeDetails);

module.exports = router;
