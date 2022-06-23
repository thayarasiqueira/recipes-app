import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import DetailsFood from './DetailsFood';

function CardReceitas({ nameReceita, imageReceita, indexReceita, idReceita }) {
  // const history = useHistory();

  return (
    <div
      // onClick={ () => { history.push(`/foods/${idReceita}`) } }
      data-testid={ `${indexReceita}-recipe-card` }
    >
      <Link
        to={ `/foods/${idReceita}` }
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
