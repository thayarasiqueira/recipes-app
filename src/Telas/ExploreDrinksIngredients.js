import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextIngredients from '../context/ContextIngredients';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextDrinks from '../context/ContextDrinks';

function ExploreDrinksIngredients({ history }) {
  const TWELVE = 12;
  const { ingredientsDrinks } = useContext(ContextIngredients);
  const { filterDrinks } = useContext(ContextDrinks);
  console.log(ingredientsDrinks);
  const historyAndFilterDrinks = async ({ target }) => {
    console.log(target.name);
    await filterDrinks(target.name);
    history.push('/drinks');
  };
  return (
    <main>
      <Header title="Explore Ingredients" />
      <div className="recommended">
        {ingredientsDrinks.slice(0, TWELVE).map(
          ({ strIngredient1: ingredient }, index) => {
            const URLIMG = `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`;
            return (
              <button
                onClick={ historyAndFilterDrinks }
                type="button"
                data-testid={ `${index}-ingredient-card` }
                key={ index }
                name={ ingredient }
              >
                <img
                  src={ URLIMG }
                  alt={ `Imagem de: ${ingredient}` }
                  data-testid={ `${index}-card-img` }
                  name={ ingredient }
                />
                <h2
                  data-testid={ `${index}-card-name` }
                  name={ ingredient }
                >
                  { ingredient }
                </h2>
              </button>
            );
          },
        )}
      </div>
      <Footer />
    </main>
  );
}

ExploreDrinksIngredients.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default ExploreDrinksIngredients;
