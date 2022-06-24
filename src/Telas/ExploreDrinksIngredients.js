import React, { useContext } from 'react';
import ContextIngredients from '../context/ContextIngredients';

export default function ExploreDrinksIngredients() {
  const TWELVE = 12;
  const { ingredientsDrinks } = useContext(ContextIngredients);
  console.log(ingredientsDrinks);
  return (
    <main>
      {ingredientsDrinks.slice(0, TWELVE).map(({ strIngredient1: ingredient }, index) => {
        const URLIMG = `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`;
        return (
          <div
            data-testid={ `${index}-ingredient-card` }
            key={ index }
          >
            <img
              src={ URLIMG }
              alt={ `Imagem de: ${ingredient}` }
              data-testid={ `${index}-card-img` }
            />
            <h2
              data-testid={ `${index}-card-name` }
            >
              { ingredient }
            </h2>
          </div>
        );
      })}
    </main>
  );
}
