import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ContextFood from '../context/ContextFood';
import CardFood from '../components/CardFood';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Food() {
  const {
    categoryApiFood,
    handlebuttonFood,
    arrayPatternFood,
    allFunction,
    // pathFood,
  } = useContext(ContextFood);

  const actualLocation = useLocation();
  return (
    <body>
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
    </body>

  );
}

export default Food;
