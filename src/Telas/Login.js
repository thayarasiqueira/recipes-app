import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

function Login() {
  const {
    userEmail,
    handlechangeEmail,
    saveEmailStorage,
    handlechangePassword,
    disabled } = useContext(LoginContext);
  return (
    <div>
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
      </form>
    </div>

  );
}

export default Login;
