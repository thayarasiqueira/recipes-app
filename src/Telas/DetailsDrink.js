import React, { useContext, useEffect } from 'react';
import ContextDetailsDrinks from '../context/DetailsDrinks/ContextDetailsDrinks';

function DetailsDrink() {
  const { arrayId, functionPullId,
    arrayIngredients, arrayPatternFood } = useContext(ContextDetailsDrinks);
  useEffect(() => {
    functionPullId();
  }, []);
  return (
    <div>
      {
        arrayId.map((item, index) => (
          <div
            key={ index }
          >
            <img
              data-testid="recipe-photo"
              src={ item.strDrinkThumb }
              alt="ilustração"
            />
            <h1
              data-testid="recipe-title"
            >
              {item.strDrink}
            </h1>
            <button
              data-testid="share-btn"
              type="button"
            >
              Compartilhar
            </button>
            <button
              data-testid="favorite-btn"
              type="button"
            >
              Favoritar
            </button>
            <h3
              data-testid="recipe-category"
            >
              {item.strAlcoholic}
            </h3>
            <div>
              <h4> Ingredients </h4>
              {
                arrayIngredients.map((elemento, numbers) => (
                  <div
                    data-testid={ `${numbers}-ingredient-name-and-measure` }
                    key={ numbers }
                  >
                    {`- ${elemento.ingredients} - ${elemento.measure}`}
                  </div>
                ))
              }
            </div>
            <div
              data-testid="instructions"
            >
              <h5>Instructions</h5>
              {item.strInstructions}
            </div>
            <div>
              <h6> Recommended </h6>
              {
                console.log(arrayPatternFood)
              }
              {
                arrayPatternFood.map((food, amount) => (
                  <div
                    data-testid={ `${amount}-recomendation-card` }
                    key={ amount }
                  >
                    <img
                      src={ food.strMealThumb }
                      alt="ilustração"
                    />
                    <p
                      data-testid={ `${amount}-recomendation-title` }
                    >
                      {food.strCategory}

                    </p>
                    <h1>{food.strMeal}</h1>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
      <button
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </button>
    </div>

  );
}

export default DetailsDrink;
