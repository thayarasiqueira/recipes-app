import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { surpriseMeDrinks } from '../components/SurpriseMeRequest';

export default function ExploreDrinks({ history }) {
  return (
    <div>
      <Header title="Explore Drinks" />
      <div className="container-btns">
        <button
          className="btn"
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
        <button
          className="btn"
          type="button"
          data-testid="explore-surprise"
          onClick={ async () => history.push(`/drinks/${await surpriseMeDrinks()}`) }
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
