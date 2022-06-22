import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Telas/Login';
import TelaPrincipal from './Telas/TelaPrincipal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './Telas/Explore';
import ExploreDrinks from './Telas/ExploreDrinks';
import ExploreFoods from './Telas/ExploreFoods';
import Profile from './Telas/Profile';
import InProgress from './Telas/InProgress';
import DoneRecipes from './Telas/DoneRecipes';
import FavoriteRecipes from './Telas/FavoriteRecipes';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ TelaPrincipal } />
      <Route path="/drinks" component={ TelaPrincipal } />
      {/* <Route path="/drinks" component={ Drinks } /> */}
      <Route exact path="/explore" component={ Explore } />
      <Route path="/explore/foods" component={ ExploreFoods } />
      <Route path="/explore/drinks" component={ ExploreDrinks } />
      <Route path="/foods/:id/in-progress" component={ InProgress } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
