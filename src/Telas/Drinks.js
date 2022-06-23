import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import ContextDrinks from '../context/ContextDrinks';
import CardDrink from '../components/CardDrink';
import Header from '../components/Header';

function Drinks() {
  const {
    categoryApiDrink,
    arrayPatternDrink,
    handleButtonDrink,
    allFunction } = useContext(ContextDrinks);

  const actualLocationDrinks = useLocation();
  return (
    <body>
      <div>
        <Header title="Drinks" enableBtn />
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
    </body>
  );
}

export default Drinks;
