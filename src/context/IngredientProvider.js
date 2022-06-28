import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextIngredients from './ContextIngredients';

const copy = require('clipboard-copy');

function IngredientProvider({ children }) {
  const [ingredientsFood, setIngredientsFood] = useState([]);
  const [ingredientsDrinks, setIngredientsDrinks] = useState([]);
  const [textCopyLink, setTextCopyLink] = useState(false);
  const [arrayFavorite, setArrayFavorite] = useState([]);
  async function ingredientsRequestDrinks() {
    try {
      const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
      const request = await fetch(URL);
      const { drinks } = await request.json();
      setIngredientsDrinks(drinks);
    } catch (error) {
      console.log(error);
    }
  }

  async function ingredientsRequestFood() {
    try {
      const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
      const request = await fetch(URL);
      const { meals } = await request.json();
      setIngredientsFood(meals);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    ingredientsRequestFood();
    ingredientsRequestDrinks();
  }, []);

  // -------------------------- ProviderFavorit-------------------------------------------

  function clickCopy(id, type) {
    if (type === 'food') { copy(`http://localhost:3000/foods/${id}`); }
    if (type === 'drink') { copy(`http://localhost:3000/drinks/${id}`); }
    setTextCopyLink(true);
  }

  function checkHeartBlack(id) {
    const arrayFavorit = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const withdrawId = arrayFavorit.filter((item) => id !== item.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(withdrawId));
    setArrayFavorite(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }

  const context = {
    textCopyLink,
    ingredientsFood,
    ingredientsDrinks,
    clickCopy,
    checkHeartBlack,
    arrayFavorite,
    setArrayFavorite,
  };

  return (
    <ContextIngredients.Provider value={ context }>
      {children}
    </ContextIngredients.Provider>
  );
}

IngredientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IngredientProvider;
