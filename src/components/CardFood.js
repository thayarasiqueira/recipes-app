import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function CardReceitas({ nameReceita, imageReceita, indexReceita, idReceita }) {
  const history = useHistory();
  return (
    <div data-testid={ `${indexReceita}-recipe-card` }>
      <button
        type="button"
        onClick={ () => {
          history.push(`/foods/${idReceita}`);
        } }

      >

        <img
          className="img-detail"
          data-testid={ `${indexReceita}-card-img` }
          src={ imageReceita }
          alt={ nameReceita }
        />
        <div
          data-testid={ `${indexReceita}-card-name` }

        >
          {nameReceita}
        </div>
      </button>
    </div>
  );
}

export default CardReceitas;
/* */
CardReceitas.propTypes = {
  nameReceita: PropTypes.node.isRequired,
  imageReceita: PropTypes.node.isRequired,
  indexReceita: PropTypes.node.isRequired,
  idReceita: PropTypes.node.isRequired,
};
