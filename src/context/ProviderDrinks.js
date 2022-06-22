import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContextDrinks from './ContextDrinks';

function ProviderDrinks({ children }) {
  // MagicNumbers
  const TWELVE = 12;
  const FIVE = 5;
  const [categoryApiDrink, setCategoryApiDrink] = useState([]);
  const [arrayPatternDrink, setArrayPatternDrink] = useState([]);
  const [nameLink, setNameLink] = useState('');

  async function apiDrink() {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setArrayPatternDrink(data.drinks.slice(0, TWELVE));
    } catch (e) {
      console.log(e);
    }
    setNameLink('');
  }

  useEffect(() => {
    apiDrink();
  }, []);

  useEffect(() => {
    const apiCategoryDrink = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const data = await response.json();
        setCategoryApiDrink(data.drinks.slice(0, FIVE));
      } catch (e) {
        console.log(e);
      }
    };
    apiCategoryDrink();
  }, []);

  async function handleButtonDrink(name) {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`);
      const data = await response.json();
      console.log(data);
      setArrayPatternDrink(data.drinks.slice(0, TWELVE));
    } catch (e) {
      console.log(e);
    }
    if (nameLink === name) {
      apiDrink();
    }
    setNameLink(name);
  }
  async function allFunction() {
    apiDrink();
  }

  const contextType = {

    categoryApiDrink,
    arrayPatternDrink,
    handleButtonDrink,
    allFunction,
  };

  return (
    <ContextDrinks.Provider value={ contextType }>
      { children }
    </ContextDrinks.Provider>
  );
}

ProviderDrinks.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderDrinks;
