// src/components/RecipeSearch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([]); // Store recipes from the backend
  const [query, setQuery] = useState(''); // Store user query
  const [diet, setDiet] = useState(''); // Store selected diet filter
  const [loading, setLoading] = useState(false); // Handle loading state

  // Fetch recipes whenever the query or diet changes
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/recipes/search', {
          params: {
            query, // Search query
            diet,  // Diet filter (optional)
          },
        });
        setRecipes(response.data); // Update recipes with the fetched data
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (query) {
      fetchRecipes(); // Fetch recipes if there is a query
    }
  }, [query, diet]); // Re-run the effect when either query or diet changes

  return (
    <div>
      <h1>Recipe Search</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on change
      />

      {/* Diet filter */}
      <select
        onChange={(e) => setDiet(e.target.value)}
        value={diet} // Set selected diet as the current state
      >
        <option value="">Select Diet</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="glutenFree">Gluten-Free</option>
        {/* Add more options as per your need */}
      </select>

      {/* Loading indicator */}
      {loading && <p>Loading...</p>}

      {/* Display recipes */}
      <div>
        {recipes.length === 0 && !loading && <p>No recipes found</p>}
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.summary}</p>
            {/* You can add more details like ingredients, instructions, etc */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
