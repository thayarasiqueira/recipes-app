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
import ExploreDrinksIngredients from './Telas/ExploreDrinksIngredients';
import ExploreFoodsIngredients from './Telas/ExploreFoodsIngredients';
import ExploreFoodsNationality from './Telas/ExploreFoodsNationality';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ TelaPrincipal } />
      <Route path="/drinks" component={ TelaPrincipal } />
      {/* <Route path="/drinks" component={ Drinks } /> */}
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route path="/explore/foods/ingredients" component={ ExploreFoodsIngredients } />
      <Route path="/explore/drinks/ingredients" component={ ExploreDrinksIngredients } />
      <Route path="/explore/foods/nationalities" component={ ExploreFoodsNationality } />
      <Route path="/foods/:id/in-progress" component={ InProgress } />
      <Route path="/profile" component={ Profile } />
    </Switch>
  );
}

export default App;
