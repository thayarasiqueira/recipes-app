import React from 'react';
import PropTypes from 'prop-types';
import recipesContext from './recipesContext';

function recipesProvider({ children }) {
  const context = {};

  return (
    <recipesContext.Provider value={ context }>
      { children }
    </recipesContext.Provider>
  );
}

recipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default recipesProvider;
