import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ContextDetailsFood from '../context/ContextDetailsFood';
import '../DetailsCss/details.css';

function DetailsFood() {
  const { arrayId, functionPullId,
    arrayIngredients, arrayPatternDrink,
    performedRecipes, doneRecipes,
    inProgressRecipes, continueRecipes } = useContext(ContextDetailsFood);
  useEffect(() => {
    functionPullId();
    doneRecipes();
    inProgressRecipes();
  }, []);
  const history = useHistory();

  const buttonContinue = (
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="button-details"
      disabled={ performedRecipes }
      onClick={ () => { history.push('/foods/'); } }
    >

      Continue Recipe

    </button>
  );

  const buttonStart = (
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="button-details"
      disabled={ performedRecipes }
      onClick={ () => {
        history.push(`/foods/${history.location.pathname.split('/')[2]}/in-progress`);
      } }
    >

      Start Recipe

    </button>
  );

  return (
    <div>
      {
        arrayId.map((item, index) => (
          <div
            key={ index }
          >
            <img
              data-testid="recipe-photo"
              src={ item.strMealThumb }
              alt="ilustração"
            />
            <h1
              data-testid="recipe-title"
            >
              {item.strMeal}
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
              {item.strCategory}
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
              <h6>Vídeo</h6>
              <iframe
                data-testid="video"
                width="240"
                height="340"
                src={ `https://www.youtube.com/embed/${item.strYoutube.split('=')[1]}` }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture"
                allowFullScreen
              />
              <h6>
                Recommended
              </h6>
              <div
                className="recomended"
              >
                {
                  arrayPatternDrink.map((drink, amount) => (
                    <div
                      className="card-recomended"
                      data-testid={ `${amount}-recomendation-card` }
                      key={ amount }
                    >
                      <img
                        src={ drink.strDrinkThumb }
                        alt="ilustração"
                        height="200"
                        width="180"
                      />
                      <p
                        className="card-category"
                      >
                        {drink.strAlcoholic}

                      </p>
                      <h1
                        data-testid={ `${amount}-recomendation-title` }
                        className="card-name"
                      >
                        {drink.strDrink}

                      </h1>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
      {
        continueRecipes ? buttonContinue : buttonStart
      }
    </div>

  );
}

export default DetailsFood;
