import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const TWELVE = 12;
  const FIVE = 5;
  const [foodApi, setFoodApi] = useState([]);
  const [categoryApi, setCategoryApi] = useState([]);

  useEffect(() => {
    const apiFood = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setFoodApi(data.meals.slice(0, TWELVE));
      } catch (e) {
        console.log(e);
      }
    };
    apiFood();
  }, []);
  // teste
  useEffect(() => {
    const apiCategory = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        const data = await response.json();
        setCategoryApi(data.meals.slice(0, FIVE));
      } catch (e) {
        console.log(e);
      }
    };
    apiCategory();
  }, []);

  function handlebutton({ target: { name } }) {
    console.log(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
  }
  const contextType = {
    foodApi,
    categoryApi,
    handlebutton,
  };

  return (
    <RecipesContext.Provider value={ contextType }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
