import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextIngredients from './ContextIngredients';

function IngredientProvider({ children }) {
  const [ingredientsFood, setIngredientsFood] = useState([]);
  const [ingredientsDrinks, setIngredientsDrinks] = useState([]);
  async function ingredientsRequestDrinks() {
    try {
      const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
      const request = await fetch(URL);
      const { drinks } = await request.json();
      setIngredientsDrinks(drinks);
      console.log(drinks);
    } catch (error) {
      console.log(error);
    }
  }

  async function ingredientsRequestFood() {
    try {
      const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
      const request = await fetch(URL);
      const { meals } = await request.json();
      console.log(meals);
      setIngredientsFood(meals);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    ingredientsRequestFood();
    ingredientsRequestDrinks();
  }, []);

  const context = {
    ingredientsFood,
    ingredientsDrinks,
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
