import React, { useContext } from 'react';
import ContextIngredients from '../context/ContextIngredients';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoodsIngredients() {
  const { ingredientsFood } = useContext(ContextIngredients);
  const TWELVE = 12;
  console.log(ingredientsFood);
  return (
    <div>
      <Header title="Explore Ingredients" />
      { ingredientsFood.slice(0, TWELVE).map(({ strIngredient: ingredient }, index) => {
        const URL = `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
        return (
          <div
            data-testid={ `${index}-ingredient-card` }
            key={ index }
          >
            <img
              src={ URL }
              alt={ `Imagem de:${ingredient}` }
              data-testid={ `${index}-card-img` }
            />
            <h2 data-testid={ `${index}-card-name` }>
              {ingredient}
            </h2>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
