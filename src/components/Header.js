import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderSearch from './HeaderSearch';
import ContextFood from '../context/ContextFood';

function Header({ title }) {
  const { handleSearch } = useContext(ContextFood);
  const [enableInput, setEnableInput] = useState(false);

  const handleClick = () => {
    if (!enableInput) {
      setEnableInput(true);
    } else {
      setEnableInput(false);
    }
  };
  return (
    <div>
      <section className="container-header">
        <h1 data-testid="page-title">{ title }</h1>
        <Link to="/profile">
          <input
            id="input-profile"
            data-testid="profile-top-btn"
            type="image"
            src={ profileIcon }
            alt="Ícone que leva ao perfil"
          />
        </Link>
        { !enableInput && <input
          data-testid="search-top-btn"
          type="image"
          src={ searchIcon }
          alt="Ícone de buscar"
          onClick={ handleClick }
          id="search-icon"
        />}
      </section>
      { enableInput
    && (
      <div className="container-search">
        <input type="text" id="search-input" onChange={ handleSearch } />
        <HeaderSearch />
      </div>
    )}
    </div>

  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
