import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import CardReceitas from './CardReceitas';

function TelaPrincipal() {
  const { foodApi, categoryApi, handlebutton } = useContext(RecipesContext);
  return (
    <body>
      <div>
        {
          categoryApi.map((item, index) => (

            <button
              data-testid={ `${item.strCategory}-category-filter` }
              type="button"
              key={ index }
              name={ item.strCategory }
              onClick={ handlebutton }
            >
              {item.strCategory}
            </button>

          ))

        }
      </div>
      {
        foodApi.map((item, index) => (
          <div
            data-testid="0-recipe-card"
            key={ index }
          >
            <CardReceitas
              nameReceita={ item.strMeal }
              imageReceita={ item.strMealThumb }
              indexReceita={ index }
            />
          </div>
        ))
      }

    </body>

  );
}

export default TelaPrincipal;
