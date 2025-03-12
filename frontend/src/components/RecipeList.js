import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes, addToFavourites }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} addToFavourites={addToFavourites} />
      ))}
    </div>
  );
}

export default RecipeList;
