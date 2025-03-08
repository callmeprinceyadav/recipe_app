// /controllers/recipeController.js
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Function to fetch recipes from Spoonacular API
const fetchRecipes = async (req, res) => {
  const { query, diet, cuisine } = req.query;

  // Check if 'query' parameter exists
  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  console.log('Received search query:', query);
  console.log('Diet:', diet);
  console.log('Cuisine:', cuisine);

  // Prepare the Spoonacular API request URL
  const apiKey = process.env.SPOONACULAR_API_KEY;
  let url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

  // Add optional parameters (diet, cuisine) if they are provided
  if (diet) url += `&diet=${diet}`;
  if (cuisine) url += `&cuisine=${cuisine}`;

  try {
    console.log('Requesting URL:', url);
    const response = await axios.get(url);

    const recipes = response.data.results;

    if (recipes.length === 0) {
      return res.status(404).json({ message: 'No recipes found' });
    }

    // Return the fetched recipes
    return res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipe data:', error);
    // Detailed error handling
    if (error.response) {
      // Server responded with a non-2xx status code
      return res.status(error.response.status).json({ message: error.response.data });
    }
    // No response from the server
    return res.status(500).json({ message: 'Error fetching recipe data' });
  }
};

// Fetch detailed recipe information by ID
const fetchRecipeDetails = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'Recipe ID is required' });
  }

  const apiKey = process.env.SPOONACULAR_API_KEY;
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    const recipeDetails = response.data;

    if (!recipeDetails) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    return res.json(recipeDetails);
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    res.status(500).json({ message: 'Error fetching recipe details' });
  }
};

module.exports = { fetchRecipes, fetchRecipeDetails };
