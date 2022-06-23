import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderSearch from './HeaderSearch';

function Header({ title, enableBtn = false }) {
  const [enableInput, setEnableInput] = useState(false);
  const handleClick = () => {
    if (!enableInput) {
      setEnableInput(true);
    } else {
      setEnableInput(false);
    }
  };
  return (
    <section>
      <Link to="/profile">
        <input
          data-testid="profile-top-btn"
          type="image"
          src={ profileIcon }
          alt="Ícone que leva ao perfil"
        />
      </Link>
      <h1 data-testid="page-title">{ title }</h1>
      { enableBtn && <input
        data-testid="search-top-btn"
        type="image"
        src={ searchIcon }
        alt="Ícone de buscar"
        onClick={ handleClick }
      />}
      { enableInput
    && (
      <>
        <input type="text" data-testid="search-input" />
        <HeaderSearch />
      </>
    )}
    </section>

  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  enableBtn: PropTypes.bool.isRequired,
};
export default Header;
