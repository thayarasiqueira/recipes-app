import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import ContextDrinks from '../context/ContextDrinks';
import CardDrink from '../components/CardDrink';
import Header from '../components/Header';
import ContextFood from '../context/ContextFood';

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
    if (filteredResults.length === 1) {
      history.push(`/drinks/${filteredResults[0].idDrink}`);
    }
  }, [filteredResults]);

  return (
    <div>
      <Header title="Drinks" enableBtn select />
      <div className="container-btns">
        {
          categoryApiDrink.map((item, index) => (
            <button
              className="btn"
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
              <CardDrink
                nameReceita={ e.strDrink }
                imageReceita={ e.strDrinkThumb }
                indexReceita={ i }
                idReceita={ e.idDrink }
              />
            </div>
          ))

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
      <Footer />
    </div>

  );
}

Drinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default Drinks;
