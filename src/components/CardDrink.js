import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardReceitas({ nameReceita, imageReceita, indexReceita, idReceita }) {
  return (
    <div
      data-testid={ `${indexReceita}-recipe-card` }
    >
      <Link
        to={ `/drinks/${idReceita}` }
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
      </Link>
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
