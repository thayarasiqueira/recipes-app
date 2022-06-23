import React, { useContext } from 'react';
import ContextFood from '../context/ContextFood';

function HeaderSearch() {
  const { handleChange, handleFilterSearch } = useContext(ContextFood);
  return (
    <div>
      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          data-testid="ingredient-search-radio"
          value="Ingredient"
          name="Ingredient"
          onClick={ handleChange }
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          data-testid="name-search-radio"
          onClick={ handleChange }
          value="Name"
          name="Name"
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          id="first-letter"
          data-testid="first-letter-search-radio"
          onClick={ handleChange }
          value="First Letter"
          name="First Letter"
        />
        First letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleFilterSearch }
      >
        Search

      </button>
    </div>

  );
}

export default HeaderSearch;
