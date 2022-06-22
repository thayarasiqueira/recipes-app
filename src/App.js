import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Telas/Login';
import Food from './Telas/Food';
import Drinks from './Telas/Drinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoods from './pages/ExploreFoods';
import DetailsDrink from './Telas/DetailsDrink';
import DetailsFood from './Telas/DetailsFood';

function App() {
  return (

    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Food } />
      <Route path="/drinks" component={ Drinks } />
      {/*  <Route path="/profile" component={ Profile } /> */}
      <Route exact path="/explore" component={ Explore } />
      <Route path="/drinks/:{id-da-receita}" component={ DetailsDrink } />
      <Route path="/foods/:{id-da-receita}" component={ DetailsFood } />
      <Route path="/explore/foods" component={ ExploreFoods } />
      <Route path="/explore/drinks" component={ ExploreDrinks } />
    </Switch>
  );
}

export default App;
