import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoginContext from './LoginContext';

export default function LoginProvider({ children }) {
  const [userEmail, setEmail] = useState({ email: '' });
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [pathFood, setPathFood] = useState('/foods');

  const handlechangeEmail = ({ target }) => {
    setEmail({ email: target.value });
  };

  const handlechangePassword = ({ target }) => {
    setPassword(target.value);
  };
  useEffect(() => {
    const minLength = 6;
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValidation.test(userEmail.email) && password.length > minLength) {
      setDisabled(false);
    } else { setDisabled(true); }
  }, [userEmail, password]);
  const saveEmailStorage = () => {
    localStorage.setItem('user', JSON.stringify(userEmail));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  };

  const contextLogin = {
    setEmail,
    password,
    userEmail,
    disabled,
    handlechangeEmail,
    saveEmailStorage,
    handlechangePassword,
    pathFood,
    setPathFood,
  };

  return (
    <LoginContext.Provider value={ contextLogin }>
      { children }
    </LoginContext.Provider>
  );
}
LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
