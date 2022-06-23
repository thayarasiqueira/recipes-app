import React from 'react';

function HeaderSearch() {
  return (
    <div>
      <label htmlFor="ingredient">
        <input type="radio" id="ingredient" data-testid="ingredient-search-radio" />
        Ingredient
      </label>
      <label htmlFor="name">
        <input type="radio" id="name" data-testid="name-search-radio" />
        Name
      </label>
      <label htmlFor="first-letter">
        <input type="radio" id="first-letter" data-testid="first-letter-search-radio" />
        First letter
      </label>
      <button type="button" data-testid="exec-search-btn">Search</button>
    </div>

  );
}

export default HeaderSearch;
