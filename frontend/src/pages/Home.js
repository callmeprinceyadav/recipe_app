import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import LoadingSkeleton from '../components/LoadingSkeleton';
import './Home.css'

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('vegetarian'); // Default search query
  const [category, setCategory] = useState('vegetarian'); // Default category

  useEffect(() => {
    fetchRecipes(category); // Initial fetch with default category
  }, [category]);

  const fetchRecipes = (query) => {
    setLoading(true);
    axios
      .get(`https://recipe-app-bacckendd.vercel.app/api/recipes/search?query=diet=${query}`)
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setSearchQuery(category);
  };

  return (
    <div className="home">
      <h1>Recipe List</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter diet type (e.g., vegetarian)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={() => fetchRecipes(searchQuery)} className="search-button">
          Search
        </button>
      </div>

      <div className="category-buttons">
        <button
          onClick={() => handleCategoryChange('vegetarian')}
          className={`category-button ${category === 'vegetarian' ? 'active' : ''}`}
        >
          Vegetarian
        </button>
        <button
          onClick={() => handleCategoryChange('vegan')}
          className={`category-button ${category === 'vegan' ? 'active' : ''}`}
        >
          Vegan
        </button>
        <button
          onClick={() => handleCategoryChange('gluten free')}
          className={`category-button ${category === 'gluten free' ? 'active' : ''}`}
        >
          Gluten-Free
        </button>
        <button
          onClick={() => handleCategoryChange('paleo')}
          className={`category-button ${category === 'paleo' ? 'active' : ''}`}
        >
          Paleo
        </button>
        <button
          onClick={() => handleCategoryChange('keto')}
          className={`category-button ${category === 'keto' ? 'active' : ''}`}
        >
          Keto
        </button>
      </div>

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}

export default Home;
