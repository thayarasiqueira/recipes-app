import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function CardReceitas({ nameReceita, imageReceita, indexReceita, idReceita }) {
  const history = useHistory();
  return (
    <button
      type="button"
      onClick={ () => {
        history.push(`/foods/${idReceita}`);
      } }
      data-testid={ `${indexReceita}-recipe-card` }
    >

      <img
        data-testid={ `${indexReceita}-card-img` }
        src={ imageReceita }
        alt="Imagem"
      />
      <div
        data-testid={ `${indexReceita}-card-name` }

      >
        {nameReceita}
      </div>
    </button>
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
