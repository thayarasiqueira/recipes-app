import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { surpriseMeDrinks } from '../components/SurpriseMeRequest';

export default function ExploreDrinks({ history }) {
  return (
    <div>
      <Header />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/drinks/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ async () => surpriseMeDrinks() }
      >
        Surprise me!
      </button>
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
