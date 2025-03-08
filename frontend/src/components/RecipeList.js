// src/components/RecipeList.js
import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
