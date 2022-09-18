import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import shareImage from '../images/shareIcon.svg';
import ContextDetailsDrinks from '../context/DetailsDrinks/ContextDetailsDrinks';
import favoritImageHeart from '../images/whiteHeartIcon.svg';
import favoritImageBlackHeart from '../images/blackHeartIcon.svg';
import Footer from '../components/Footer';

function InProgressDrinks() {
  const { arrayId, functionPullId,
    arrayIngredients,
    doneRecipes,
    inProgressRecipes, clickCopy,
    textCopyLink, favoritBlackHeart,
    clickHeartBlack, setFavoritBlackHeart } = useContext(ContextDetailsDrinks);

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
    checkHeartBlack();
    if (!JSON.parse(localStorage.getItem('favoriteRecipes'))) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
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
              <Link to="/done-recipes">
                <button className="btn" data-testid="finish-recipe-btn" type="button">
                  Finish Recipe
                </button>
              </Link>
            </div>
          </div>
        ))
      }
      <Footer />
    </div>
  );
}

export default InProgressDrinks;
