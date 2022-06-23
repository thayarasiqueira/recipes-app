import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { surpriseMeFood } from '../components/SurpriseMeRequest';

export default function ExploreFoods({ history }) {
  return (
    <div>
      <Header />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>
      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ async () => surpriseMeFood() }
      >
        Surprise me!
      </button>
    </div>
  );
}

ExploreFoods.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
