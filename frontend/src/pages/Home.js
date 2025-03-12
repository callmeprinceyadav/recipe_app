import React, { useState } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import LoadingSkeleton from '../components/LoadingSkeleton';
import ErrorAlert from '../components/ErrorAlert';  // Import the ErrorAlert component
import Navbar from '../components/Navbar';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [category, setCategory] = useState('vegetarian'); // Default category
  const [favourites, setFavourites] = useState([]); // For storing favourite recipes
  const [error, setError] = useState(null); // Error state to trigger error alert

  const fetchRecipes = (query) => {
    setLoading(true);
    setError(null); // Reset error before each fetch
    axios
      .get(`https://recipe-app-bacckendd.vercel.app/api/recipes/search?query=diet=${query}`)
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
        setError("There is an API limit reached error or please check the console for more details."); // Set error message
      });
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setSearchQuery(category); // Set the query to the category when category is selected
  };

  const handleSearch = () => {
    fetchRecipes(searchQuery); // Fetch recipes only after clicking "Search"
  };

  const addToFavourites = (recipe) => {
    setFavourites([...favourites, recipe]); // Add recipe to favourites
  };

  return (
    <div className="home">
      <div>
        < Navbar />
      </div>
      {/* Search and Category Selector */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter diet type (e.g., vegetarian)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
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

      {/* Display ErrorAlert if error occurs */}
      {error && <ErrorAlert />}

      {/* Loading Skeleton or Recipe List */}
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <RecipeList recipes={recipes} addToFavourites={addToFavourites} />
      )}

      {/* Favourite Recipes Section */}
      <div className="favourites">
        <h2>Favourite Recipes</h2>
        <ul>
          {favourites.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
