import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { surpriseMeFood } from '../components/SurpriseMeRequest';

export default function ExploreFoods({ history }) {
  return (
    <div>
      <Header title="Explore Foods" />
      <div className="container-btns">
        <button
          className="btn"
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          className="btn"
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          className="btn"
          type="button"
          data-testid="explore-surprise"
          onClick={ async () => history.push(`/foods/${await surpriseMeFood()}`) }
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </div>
  );
}

ExploreFoods.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
