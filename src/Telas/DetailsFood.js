import React, { useContext, useEffect } from 'react';
import ContextDetailsFood from '../context/ContextDetailsFood';
import '../DetailsCss/details.css';

function DetailsFood() {
  const { arrayId, functionPullId,
    arrayIngredients, arrayPatternDrink } = useContext(ContextDetailsFood);
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
                width="340"
                height="640"
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
                        height="150"
                        width="150"
                      />
                      <p
                        className="card-titulo"
                        data-testid={ `${amount}-recomendation-title` }
                      >
                        {drink.strAlcoholic}

                      </p>
                      <h1
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
      <button
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </button>
    </div>

  );
}

export default DetailsFood;
