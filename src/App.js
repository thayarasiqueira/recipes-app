import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Telas/Login';
import TelaPrincipal from './Telas/TelaPrincipal';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ TelaPrincipal } />
    </Switch>
  );
}

export default App;
