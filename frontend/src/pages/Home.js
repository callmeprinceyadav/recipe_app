// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import LoadingSkeleton from '../components/LoadingSkeleton';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching recipes data from your backend
    axios
      .get('http://localhost:5000/api/recipes/search?query=chicken&diet=vegetarian')
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      <h1>Recipe List</h1>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}

export default Home;
