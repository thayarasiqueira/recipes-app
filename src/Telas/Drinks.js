import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import ContextDrinks from '../context/ContextDrinks';
import CardDrink from '../components/CardDrink';
import Header from '../components/Header';
import ContextFood from '../context/ContextFood';

const arrayNumber = 12;
let array = [];
function Drinks({ history }) {
  const {
    categoryApiDrink,
    arrayPatternDrink,
    handleButtonDrink,
    allFunction } = useContext(ContextDrinks);

  const { setSelect, filteredResults } = useContext(ContextFood);

  useEffect(() => {
    setSelect(true);
  });

  useEffect(() => {
    switch (filteredResults ? filteredResults.length : filteredResults) {
    case null:
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      break;
    case 1:
      history.push(`/drinks/${filteredResults[0].idDrink}`);
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

  const actualLocationDrinks = useLocation();
  return (
    <div>
      <div>
        <Header title="Drinks" enableBtn select />
        {
          categoryApiDrink.map((item, index) => (
            <button
              data-testid={ `${item.strCategory}-category-filter` }
              type="button"
              key={ index }
              name={ item.strCategory }
              onClick={ () => handleButtonDrink(item.strCategory) }
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
              <CardDrink
                nameReceita={ e.strDrink }
                imageReceita={ e.strDrinkThumb }
                indexReceita={ i }
                idReceita={ e.idDrink }
              />
            </div>
          )) : null

        }

        {
          arrayPatternDrink.map((item, index) => (
            <div
              key={ index }
            >
              <CardDrink
                nameReceita={ item.strDrink }
                imageReceita={ item.strDrinkThumb }
                indexReceita={ index }
                idReceita={ item.idDrink }
              />
            </div>
          ))

        }

      </div>
      {actualLocationDrinks.pathname === '/drinks' ? <Footer /> : null}
    </div>

  );
}

Drinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Drinks;
