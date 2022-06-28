import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import ContextFood from './ContextFood';

function ProviderFood({ children }) {
  // MagicNumbers
  const TWELVE = 12;
  const FIVE = 5;
  const [categoryApiFood, setCategoryApiFood] = useState([]);
  const [arrayPatternFood, setArrayPatternFood] = useState([]);
  const [nameLink, setNameLink] = useState('');
  const [pathFood, setPathFood] = useState('/foods');
  /* const ActualLocation = () => {
    const actualPath = useLocation();
    setPathFood(actualPath);
  };
  */
  async function apiFood() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      console.log(data);
      setArrayPatternFood(data.meals.slice(0, TWELVE));
    } catch (e) {
      console.log(e);
    }
    setNameLink('');
  }
  useEffect(() => {
    apiFood();
  }, []);
  useEffect(() => {
    const apiCategory = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        const data = await response.json();
        console.log(data);
        setCategoryApiFood(data.meals.slice(0, FIVE));
      } catch (e) {
        console.log(e);
      }
    };
    apiCategory();
  }, []);

  async function handlebuttonFood(name) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
      const data = await response.json();
      setArrayPatternFood(data.meals.slice(0, TWELVE));
    } catch (e) {
      console.log(e);
    }

    if (nameLink === name) {
      apiFood();
    }
    setNameLink(name);
  }

  async function allFunction() {
    apiFood();
  }

  async function filterFoodByIngredient(ingredient) {
    try {
      console.log(ingredient);
      const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
      const response = await fetch(URL);
      const { meals } = await response.json();
      setArrayPatternFood(meals.slice(0, TWELVE));
      console.log(meals);
    } catch (error) {
      console.log(error);
    }
  }

  const contextType = {
    categoryApiFood,
    arrayPatternFood,
    pathFood,
    setPathFood,
    handlebuttonFood,
    allFunction,
    filterFood: async (ingredient) => filterFoodByIngredient(ingredient),
  };

  return (
    <ContextFood.Provider value={ contextType }>
      { children }
    </ContextFood.Provider>
  );
}

ProviderFood.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderFood;
