import React from 'react';

function RecipeItem({ recipe, addToFavourites }) {
  return (
    <div className="recipe-item">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button onClick={() => addToFavourites(recipe)} className="favourite-button">
        Add to Favourites
      </button>
    </div>
  );
}

export default RecipeItem;
