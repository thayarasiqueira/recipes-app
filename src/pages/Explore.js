import React from 'react';
import PropTypes from 'prop-types';

export default function Explore({ history }) {
  return (
    <main>
      <button
        data-testid="explore-foods"
        type="button"
        onClick={ () => history.push('/explore/foods') }
      >
        Explore Foods
      </button>
      <button
        data-testid="explore-drinks"
        type="button"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>
    </main>
  );
}

Explore.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
