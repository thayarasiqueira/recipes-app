import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Telas/Login';
import TelaPrincipal from './Telas/TelaPrincipal';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ TelaPrincipal } />
      {/* <Route path="/drinks" component={ Drinks } />
      <Route path="/explore" component={ Explore } />
      <Route path="/profile" component={ Profile } /> */}
    </Switch>
  );
}

export default App;
