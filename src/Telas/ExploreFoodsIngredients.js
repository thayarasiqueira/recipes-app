import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContextIngredients from '../context/ContextIngredients';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextFood from '../context/ContextFood';

function ExploreFoodsIngredients({ history }) {
  const { ingredientsFood } = useContext(ContextIngredients);
  const { filterFood } = useContext(ContextFood);
  const historyAndFilterFood = async ({ target }) => {
    await filterFood(target.name);
    history.push('/foods');
  };

  const TWELVE = 12;
  return (
    <div>
      <Header title="Explore Ingredients" />
      <div className="recommended">
        { ingredientsFood.slice(0, TWELVE).map(({ strIngredient: ingredient }, index) => {
          const URL = `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
          return (
            <button
              type="button"
              onClick={ historyAndFilterFood }
              data-testid={ `${index}-ingredient-card` }
              key={ index }
              name={ ingredient }
            >
              <img
                src={ URL }
                alt={ `Imagem de:${ingredient}` }
                data-testid={ `${index}-card-img` }
                name={ ingredient }
              />
              <h2 data-testid={ `${index}-card-name` } name={ ingredient }>
                {ingredient}
              </h2>
            </button>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

ExploreFoodsIngredients.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default ExploreFoodsIngredients;
