import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const initialPosition = 10;
  const finalPosition = 26;
  const emailFromLocal = localStorage.getItem('user');
  const userEmailSub = emailFromLocal.substring(initialPosition, finalPosition);

  const handleClickLogout = () => {
    localStorage.clear();
  };

  return (
    <main>
      <section>
        <h3 data-testid="profile-email">{userEmailSub}</h3>
      </section>
      <section>
        <Link to="/done-recipes">
          <button type="button" data-testid="profile-done-btn">Done Recipes</button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes

          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ handleClickLogout }
          >
            Logout

          </button>
        </Link>
      </section>
    </main>
  );
}
