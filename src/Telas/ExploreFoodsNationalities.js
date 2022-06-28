import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextFood from '../context/ContextFood';
import CardFood from '../components/CardFood';

function ExploreFoodsNationalities() {
  const { mealsFood } = useContext(ContextFood);
  const [nationalities, setNationalities] = useState([]);
  const [mealsFiltered, setMealsFiltered] = useState([]);
  async function requestNationalities() {
    try {
      const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const response = await fetch(URL);
      const { meals } = await response.json();
      setNationalities(meals);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    requestNationalities();
    setMealsFiltered(mealsFood);
  }, [mealsFood]);

  const filterByNationality = async ({ target }) => {
    const TWELVE = 12;
    const { value } = target;
    const URL = value === 'All' ? 'https://www.themealdb.com/api/json/v1/1/search.php?s=' : `https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`;
    try {
      const response = await fetch(URL);
      const { meals } = await response.json();
      setMealsFiltered(meals.slice(0, TWELVE));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header title="Explore Nationalities" enableBtn />
      <select
        data-testid="explore-by-nationality-dropdown"
        onClick={ filterByNationality }
      >
        <option data-testid="All-option"> All </option>
        { nationalities.map(({ strArea }, index) => (
          <option
            data-testid={ `${strArea}-option` }
            key={ index }
          >
            { strArea }
          </option>
        ))}
      </select>
      { mealsFiltered.map((i, index) => (
        <div key={ index }>
          <CardFood
            nameReceita={ i.strMeal }
            imageReceita={ i.strMealThumb }
            indexReceita={ index }
            idReceita={ i.idMeal }
          />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default ExploreFoodsNationalities;
