import React from 'react';

function InProgress() {
  return (
    <div>
      <img data-testid="recipe-photo" src="" alt="" />
      <h1 data-testid="recipe-title">recipeTitle</h1>
      <h3 data-testid="recipe-category">recipeCategory</h3>
      <p data-testid="instructions">recipeInstructions</p>
      <ul>
        {recipeIngridients.map((e, index) => (
          <li data-testid={ `${index}-ingredient-step` } key={ index }>
            { e }
          </li>
        ))}
      </ul>
      <button data-testid="share-btn" type="button">Compartilhar</button>
      <button data-testid="favorite-btn" type="button">Favoritar</button>
      <button data-testid="finish-recipe-btn" type="button">Finalizar</button>
    </div>
  );
}

export default InProgress;
