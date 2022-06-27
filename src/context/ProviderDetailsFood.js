import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ContextDetailsFood from './ContextDetailsFood';

const copy = require('clipboard-copy');

function ProviderDetailsFood({ children }) {
  // MagicNumber
  const TWENTY = 20;
  const SIX = 6;
  // --------------------------------------------------------
  const history = useHistory();
  const idHistory = history.location.pathname.split('/')[2];
  const [arrayId, setArrayId] = useState([]);
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [arrayPatternDrink, setArrayPatternDrink] = useState([]);
  const [performedRecipes, setPerformedRecipes] = useState(false);
  const [continueRecipes, setContinueRecipes] = useState(false);
  const [textCopyLink, setTextCopyLink] = useState(false);
  const [favoritBlackHeart, serFavoritBlackHeart] = useState(false);

  async function functionPullId() {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${(history.location.pathname.split('/')[2])}`);
      const data = await response.json();
      setArrayId(data.meals);
      const revenue = data.meals;
      const setIngredients = [];
      for (let i = 1; i <= TWENTY; i += 1) {
        if (!revenue[0][`strIngredient${i}`]) { break; }
        setIngredients.push({
          ingredients: revenue[0][`strIngredient${i}`],
          measure: revenue[0][`strMeasure${i}`],
        });
      }
      setArrayIngredients(setIngredients);
    } catch (e) {
      console.log(e);
    }
  }
  async function apiDrink() {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setArrayPatternDrink(data.drinks.slice(0, SIX));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    apiDrink();
  }, []);

  function doneRecipes() {
    const doneLocalStorage = localStorage.getItem('doneRecipes');
    if (doneLocalStorage !== null) {
      for (let i = 0; i < doneLocalStorage.length; i += 1) {
        if (doneLocalStorage[i].id === idHistory) {
          setPerformedRecipes(!performedRecipes);
          break;
        }
      }
    }
  }

  function inProgressRecipes() {
    const inProgress = localStorage.getItem('inProgressRecipes');
    if (inProgress !== null) {
      for (let i = 0; i < inProgress.length; i += 1) {
        const idDrink = (Object.keys(inProgress[i].cocktails));
        if (idDrink === idHistory) {
          setContinueRecipes(!continueRecipes);
          break;
        }
      }
    }
  }

  function clickCopy() {
    copy(`http://localhost:3000${history.location.pathname}`);
    setTextCopyLink(true);
  }

  function checkHeartBlack() {
    const localFavorit = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (localFavorit !== null) {
      for (let i = 0; i < localFavorit.length; i += 1) {
        if (localFavorit[i].id === idHistory) {
          serFavoritBlackHeart(true);
          break;
        }
      }
    }
  }

  function saveFavoriteProdut(favoriteProduto) {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteProduto));
  }

  function clickHeartBlack() {
    const arrayFavorit = { id: arrayId[0].idMeal,
      type: 'food',
      nationality: arrayId[0].strArea,
      category: arrayId[0].strCategory,
      alcoholicOrNot: '',
      name: arrayId[0].strMeal,
      image: arrayId[0].strMealThumb };
    if (favoritBlackHeart === false) {
      if (localStorage.getItem('favoriteRecipes') !== JSON.stringify([])) {
        const favorit = JSON.parse(localStorage.getItem('favoriteRecipes'));
        saveFavoriteProdut([...favorit, arrayFavorit]);
      } else {
        saveFavoriteProdut([arrayFavorit]);
      }
    } else {
      const favoritArray = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const newArray = favoritArray.filter((item) => (item.id !== idHistory));
      saveFavoriteProdut(newArray);
    }
    serFavoritBlackHeart(!favoritBlackHeart);
  }
  const contextType = {
    arrayId,
    functionPullId,
    arrayIngredients,
    arrayPatternDrink,
    setPerformedRecipes,
    performedRecipes,
    doneRecipes,
    inProgressRecipes,
    clickCopy,
    textCopyLink,
    clickHeartBlack,
    checkHeartBlack,
    favoritBlackHeart,
  };

  return (
    <ContextDetailsFood.Provider value={ contextType }>
      { children }
    </ContextDetailsFood.Provider>
  );
}

ProviderDetailsFood.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderDetailsFood;
