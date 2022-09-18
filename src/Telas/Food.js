import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ContextFood from '../context/ContextFood';
import CardFood from '../components/CardFood';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Food({ history }) {
  const {
    categoryApiFood,
    handlebuttonFood,
    arrayPatternFood,
    allFunction,
    filteredResults,
    // pathFood,
  } = useContext(ContextFood);

  useEffect(() => {
    if (filteredResults.length === 1) {
      history.push(`/foods/${filteredResults[0].idMeal}`);
    }
  }, [filteredResults]);

  const actualLocation = useLocation();
  return (
    <div>
      <Header title="Foods" enableBtn />
      <div className="container-btns-foods">
        {
          categoryApiFood.map((item, index) => (

            <button
              className="btn"
              data-testid={ `${item.strCategory}-category-filter` }
              type="button"
              key={ index }
              name={ item.strCategory }
              onClick={ () => handlebuttonFood(item.strCategory) }
              // () => handleButtonDrink({ item.strCategory }) Verificar Dica Muca
            >
              {item.strCategory}
            </button>

          ))

        }
        <button
          className="btn"
          type="button"
          data-testid="All-category-filter"
          name="All"
          onClick={ allFunction }
        >
          All
        </button>
      </div>
      <div className="container-foods">
        {
          filteredResults.map((e, i) => (
            <div
              key={ i }
            >
              <CardFood
                nameReceita={ e.strMeal }
                imageReceita={ e.strMealThumb }
                indexReceita={ i }
                idReceita={ e.idMeal }
              />
            </div>
          ))
        }

        {
          filteredResults.length === 0 && arrayPatternFood.map((item, index) => (
            <div
              key={ index }
            >
              <CardFood
                nameReceita={ item.strMeal }
                imageReceita={ item.strMealThumb }
                indexReceita={ index }
                idReceita={ item.idMeal }
              />
            </div>
          ))

        }
      </div>
      { actualLocation.pathname === '/foods' ? <Footer /> : null}
    </div>

  );
}

Food.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Food;
