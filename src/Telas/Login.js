import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../context/LoginContext';
import '../Login.css';
import logoIcon from '../images/logoIcon.svg';

function Login() {
  const {
    userEmail,
    handlechangeEmail,
    saveEmailStorage,
    handlechangePassword,
    disabled } = useContext(LoginContext);
  return (
    <div className="container-login">
      <form>
        <input
          type="email"
          placeholder="email"
          data-testid="email-input"
          value={ userEmail.email }
          onChange={ handlechangeEmail }
        />
        <input
          type="password"
          placeholder="senha"
          data-testid="password-input"
          onChange={ handlechangePassword }
        />
      </form>
      <Link to="/foods">
        <button
          type="button"
          disabled={ disabled }
          data-testid="login-submit-btn"
          onClick={ saveEmailStorage }
        >
          Login

        </button>
      </Link>
      <img src={ logoIcon } alt="logo food hunter" />
    </div>

  );
}

export default Login;
