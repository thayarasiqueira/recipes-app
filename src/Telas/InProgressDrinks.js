import React, { useContext, useEffect } from 'react';

import shareImage from '../images/shareIcon.svg';
import ContextDetailsDrinks from '../context/DetailsDrinks/ContextDetailsDrinks';
import '../DetailsCss/details.css';
import favoritImageHeart from '../images/whiteHeartIcon.svg';
import favoritImageBlackHeart from '../images/blackHeartIcon.svg';

function InProgressDrinks() {
  const { arrayId, functionPullId,
    arrayIngredients,
    doneRecipes,
    inProgressRecipes, clickCopy,
    textCopyLink, favoritBlackHeart,
    checkHeartBlack, clickHeartBlack } = useContext(ContextDetailsDrinks);

  useEffect(() => {
    functionPullId();
    inProgressRecipes();
    doneRecipes();
    checkHeartBlack();
  }, []);

  const buttonShare = (
    <button
      data-testid="share-btn"
      type="button"
      onClick={ () => { clickCopy(); } }
    >
      <img
        src={ shareImage }
        alt="Compartilhar"
      />
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
              src={ item.strDrinkThumb }
              alt="ilustração"
            />
            <h1
              data-testid="recipe-title"
            >
              {item.strDrink}
            </h1>
            {
              textCopyLink
                ? <p>Link copied!</p>
                : buttonShare
            }
            <button
              type="button"
              onClick={ () => { clickHeartBlack(); } }
            >
              <img
                data-testid="favorite-btn"
                src={ favoritBlackHeart ? favoritImageBlackHeart : favoritImageHeart }
                alt="Favorit"
              />
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
                    data-testid={ `${numbers}-ingredient-step` }
                    key={ numbers }
                  >
                    <input
                      id={ numbers }
                      type="checkbox"
                      name={ ` ${elemento.ingredients} - ${elemento.measure}` }
                      value={ ` ${elemento.ingredients} - ${elemento.measure}` }
                    />
                    <label htmlFor={ numbers }>
                      { ` ${elemento.ingredients} - ${elemento.measure}` }

                    </label>
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
              <button data-testid="finish-recipe-btn" type="button">
                Finish Recipe
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default InProgressDrinks;
