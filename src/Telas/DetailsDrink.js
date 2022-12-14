import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import shareImage from '../images/shareIcon.svg';
import ContextDetailsDrinks from '../context/DetailsDrinks/ContextDetailsDrinks';
import favoritImageHeart from '../images/whiteHeartIcon.svg';
import favoritImageBlackHeart from '../images/blackHeartIcon.svg';

function DetailsDrink() {
  const history = useHistory();
  const { arrayId, functionPullId,
    arrayIngredients, arrayPatternFood,
    performedRecipes,
    continueRecipes, doneRecipes,
    inProgressRecipes, clickCopy,
    textCopyLink, clickHeartBlack,
    setFavoritBlackHeart, favoritBlackHeart } = useContext(ContextDetailsDrinks);

  const idHistory = history.location.pathname.split('/')[2];

  function checkHeartBlack() {
    const localFavorit = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (localFavorit !== null) {
      const ifTrue = localFavorit.some((item) => (item.id === idHistory));
      setFavoritBlackHeart(ifTrue);
    }
  }

  useEffect(() => {
    functionPullId();
    inProgressRecipes();
    doneRecipes();
    if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    checkHeartBlack();
  }, []);
  const buttonContinue = (
    <button
      data-testid="start-recipe-btn"
      type="button"
      className="button-details"
      disabled={ performedRecipes }
      onClick={ () => { history.push('/drinks/'); } }
    >

      Continue Recipe

    </button>
  );

  const buttonStart = (
    <button
      className="btn-start-recipe"
      data-testid="start-recipe-btn"
      type="button"
      disabled={ performedRecipes }
      onClick={ () => {
        history.push(`/drinks/${history.location.pathname.split('/')[2]}/in-progress`);
      } }
    >

      Start Recipe

    </button>
  );

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
    <div className="container-details">
      {
        arrayId.map((item, index) => (
          <div
            key={ index }
          >
            <img
              className="img-detail"
              data-testid="recipe-photo"
              src={ item.strDrinkThumb }
              alt="ilustra????o"
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
              <h4>Instructions</h4>
              {item.strInstructions}
            </div>
            <div>
              <div
                className="recommended"
              >
                <h5> Recommended </h5>
                {
                  arrayPatternFood.map((food, amount) => (
                    <div
                      className="card-recommended"
                      data-testid={ `${amount}-recomendation-card` }
                      key={ amount }
                    >
                      <img
                        src={ food.strMealThumb }
                        alt="ilustra????o"
                        height="200"
                        width="180"
                      />
                      <p
                        className="card-category"
                      >
                        {food.strCategory}

                      </p>
                      <h6
                        data-testid={ `${amount}-recomendation-title` }
                        className="card-name"
                      >
                        {food.strMeal}

                      </h6>
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

export default DetailsDrink;
