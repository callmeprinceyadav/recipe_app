import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';  // Correct import for React Router

function RecipePage() {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();  // Get the recipe ID from URL

  useEffect(() => {
    // Fetch the recipe details
    axios
      .get(`http://localhost:5000/api/recipes/${id}`)
      .then((response) => {
        setRecipeDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipe details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipeDetails) {
    return <div>Recipe not found</div>;
  }

  // Safe check for nutrition data (to avoid undefined errors)
  const calories = recipeDetails.nutrition ? recipeDetails.nutrition.calories : 'N/A';

  return (
    <div className="recipe-details">
      <h2>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      
      <h3>Ingredients:</h3>
      <ul>
        {recipeDetails.extendedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <p>{recipeDetails.instructions}</p>

      <h3>Nutrition Info:</h3>
      <p>Calories: {calories}</p>
    </div>
  );
}

export default RecipePage;
