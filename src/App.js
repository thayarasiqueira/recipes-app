import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Telas/Login';
import TelaPrincipal from './Telas/TelaPrincipal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoods from './pages/ExploreFoods';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ TelaPrincipal } />
      {/* 
      <Route path="/drinks" component={ Drinks } />
      <Route path="/profile" component={ Profile } /> */}
      <Route exact path="/explore" component={ Explore } />
      <Route path="/explore/foods" component={ ExploreFoods } />
      <Route path="/explore/drinks" component={ ExploreDrinks } />
    </Switch>
  );
}

export default App;
