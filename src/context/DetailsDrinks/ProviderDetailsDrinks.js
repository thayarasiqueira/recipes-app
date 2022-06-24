import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ContextDetailsDrinks from './ContextDetailsDrinks';

function ProviderDetailsDrinks({ children }) {
  // MagicNumber
  const TWENTY = 20;
  const SIX = 6;
  // ----------------------------------------------------------------------------
  const history = useHistory();
  const [arrayId, setArrayId] = useState([]);
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [arrayPatternFood, setArrayPatternFood] = useState([]);
  async function functionPullId() {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${(history.location.pathname.split('/')[2])}`);
      const data = await response.json();
      console.log(data.drinks);
      setArrayId(data.drinks);
      const revenue = data.drinks;
      const setIngredients = [];
      for (let i = 1; i <= TWENTY; i += 1) {
        if (!revenue[0][`strIngredient${i}`]) { break; }
        if (revenue[0][`strMeasure${i}`] === null) {
          setIngredients.push({
            ingredients: revenue[0][`strIngredient${i}`],
            measure: '',
          });
        } else {
          setIngredients.push({
            ingredients: revenue[0][`strIngredient${i}`],
            measure: revenue[0][`strMeasure${i}`],
          });
        }
      }
      setArrayIngredients(setIngredients);
    } catch (e) {
      console.log(e);
    }
  }
  async function apiFood() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      console.log(data.meals);
      setArrayPatternFood(data.meals.slice(0, SIX));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    apiFood();
  }, []);

  const contextType = {
    arrayId,
    functionPullId,
    arrayIngredients,
    arrayPatternFood,
  };

  return (
    <ContextDetailsDrinks.Provider value={ contextType }>
      { children }
    </ContextDetailsDrinks.Provider>
  );
}

ProviderDetailsDrinks.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderDetailsDrinks;