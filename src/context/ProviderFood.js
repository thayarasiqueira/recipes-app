import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextFood from './ContextFood';

function ProviderFood({ children }) {
  // MagicNumbers
  const TWELVE = 12;
  const FIVE = 5;
  const [categoryApiFood, setCategoryApiFood] = useState([]);
  const [arrayPatternFood, setArrayPatternFood] = useState([]);
  const [nameLink, setNameLink] = useState('');

  async function apiFood() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
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

  const contextType = {
    categoryApiFood,
    arrayPatternFood,
    handlebuttonFood,
    allFunction,
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
