import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section>
      <h1 data-testid="page-title">Title</h1>
      <Link to="/profile">
        <button data-testid="profile-top-btn" type="button">Perfil</button>
      </Link>
      <input type="text" />
      <button data-testid="search-top-btn" type="button">Search</button>
    </section>

  );
}

export default Header;
