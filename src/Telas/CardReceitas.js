import React from 'react';
import PropTypes from 'prop-types';

function CardReceitas({ nameReceita, imageReceita, indexReceita }) {
  return (
    <div
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
    </div>
  );
}

export default CardReceitas;
/* */
CardReceitas.propTypes = {
  nameReceita: PropTypes.node.isRequired,
  imageReceita: PropTypes.node.isRequired,
  indexReceita: PropTypes.node.isRequired,
};
