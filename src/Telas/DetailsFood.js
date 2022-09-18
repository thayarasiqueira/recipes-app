import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import shareImage from '../images/shareIcon.svg';
import favoritImageHeart from '../images/whiteHeartIcon.svg';
import favoritImageBlackHeart from '../images/blackHeartIcon.svg';
import ContextDetailsFood from '../context/ContextDetailsFood';

function DetailsFood() {
  const { arrayId, functionPullId,
    arrayIngredients, arrayPatternDrink,
    performedRecipes, doneRecipes,
    inProgressRecipes,
    continueRecipes,
    clickCopy, textCopyLink,
    clickHeartBlack, setFavoritBlackHeart,
    favoritBlackHeart } = useContext(ContextDetailsFood);

  const history = useHistory();
  const idHistory = history.location.pathname.split('/')[2];

  function checkHeartBlack() {
    const localFavorit = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (localFavorit !== null) {
      const ifTrue = localFavorit.some((item) => (item.id === idHistory));
      setFavoritBlackHeart(ifTrue);
    }
  }

  useEffect(() => {
    checkHeartBlack();
    functionPullId();
    doneRecipes();
    inProgressRecipes();
    if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  }, []);
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
      type="button"
      className="btn-start-recipe"
      disabled={ performedRecipes }
      onClick={ () => {
        history.push(`/foods/${history.location.pathname.split('/')[2]}/in-progress`);
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
              src={ item.strMealThumb }
              alt="ilustração"
            />
            <h1
              data-testid="recipe-title"
            >
              {item.strMeal}
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
              <h4>Instructions</h4>
              {item.strInstructions}
            </div>
            <div>
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
              <div
                className="recommended"
              >
                <h5>
                  Recommended
                </h5>
                {
                  arrayPatternDrink.map((drink, amount) => (
                    <div
                      className="card-recommended"
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
                      <h6
                        data-testid={ `${amount}-recomendation-title` }
                        className="card-name"
                      >
                        {drink.strDrink}

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

export default DetailsFood;
