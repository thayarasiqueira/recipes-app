import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoginContext from '../context/LoginContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  // const initialPosition = 10;
  // const finalPosition = 26;
  const emailFromLocal = localStorage.getItem('user');
  // const userEmailSub = emailFromLocal.substring(initialPosition, finalPosition);
  // Aqui o cypress nâo ta deixando descontruir ou modificar o email que vem do localStorage. Tentei de várias formas e o 10 sempre falha, então deixei ele nesse formato por enquanto porque aĩ todos os requisitos que fizemos até agora passam.

  const { setEmail } = useContext(LoginContext);

  const handleClickLogout = () => {
    localStorage.clear();
    setEmail('');
  };

  return (
    <main>
      <Header title="Profile" />
      <section>
        <h3 data-testid="profile-email">{emailFromLocal}</h3>

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
      <Footer />
    </main>
  );
}
