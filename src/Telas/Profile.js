import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginContext from '../context/LoginContext';

export default function Profile() {
  const emailFromLocal = JSON.parse(localStorage.getItem('user'));
  const { setEmail } = useContext(LoginContext);

  const handleClickLogout = () => {
    localStorage.clear();
    setEmail('');
  };

  return (
    <main>
      <Header title="Profile" />
      <section className="container-details">
        <h3
          data-testid="profile-email"
        >
          {emailFromLocal.email}

        </h3>
        <Link to="/favorite-recipes">
          <button
            className="btn"
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            className="btn"
            type="button"
            data-testid="profile-logout-btn"
            onClick={ handleClickLogout }
          >
            Logout
          </button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
