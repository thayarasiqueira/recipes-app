import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ContextFood from '../context/ContextFood';
import CardFood from '../components/CardFood';
import Header from '../components/Header';
import Footer from '../components/Footer';

const arrayNumber = 12;
let array = [];
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
    switch (filteredResults ? filteredResults.length : filteredResults) {
    case null:
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      break;
    case 1:

      history.push(`/foods/${filteredResults[0].idMeal}`);
      break;
    default:
      array = filteredResults;
    }
  }, [filteredResults]);

  useEffect(() => {
    if (array.length > arrayNumber) {
      array = filteredResults.slice(0, arrayNumber);
    }
  }, [array]);

  const actualLocation = useLocation();
  return (
    <div>
      <div>
        <Header title="Foods" enableBtn />
        {
          categoryApiFood.map((item, index) => (

            <button
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
          type="button"
          data-testid="All-category-filter"
          name="All"
          onClick={ allFunction }
        >
          All
        </button>
      </div>
      <div>
        {
          filteredResults && filteredResults.length > 1 ? array.map((e, i) => (
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
          )) : null
        }

        {
          arrayPatternFood.map((item, index) => (
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
