import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ContextDetailsFood from './ContextDetailsFood';

function ProviderDetailsFood({ children }) {
  // MagicNumber
  const TWENTY = 20;
  const history = useHistory();
  const [arrayId, setArrayId] = useState([]);
  const [arrayIngredients, setArrayIngredients] = useState([]);
  const [arrayPatternDrink, setArrayPatternDrink] = useState([]);
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
      setArrayPatternDrink(data.drinks);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    apiDrink();
  }, []);

  const contextType = {
    arrayId,
    functionPullId,
    arrayIngredients,
    arrayPatternDrink,
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
