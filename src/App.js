import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Telas/Login';
import Food from './Telas/Food';
import Drinks from './Telas/Drinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './Telas/Explore';
import ExploreDrinks from './Telas/ExploreDrinks';
import ExploreFoods from './Telas/ExploreFoods';
import DetailsDrink from './Telas/DetailsDrink';
import DetailsFood from './Telas/DetailsFood';
import Profile from './Telas/Profile';
import InProgress from './Telas/InProgress';
import ExploreDrinksIngredients from './Telas/ExploreDrinksIngredients';
import ExploreFoodsIngredients from './Telas/ExploreFoodsIngredients';
import ExploreFoodsNationality from './Telas/ExploreFoodsNationality';
import DoneRecipes from './Telas/DoneRecipes';
import FavoriteRecipes from './Telas/FavoriteRecipes';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Food } />
      <Route path="/drinks" component={ Drinks } />
      {/*  <Route path="/profile" component={ Profile } /> */}
      {/* <Route path="/drinks" component={ Drinks } /> */}
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route path="/explore/foods/ingredients" component={ ExploreFoodsIngredients } />
      <Route path="/explore/drinks/ingredients" component={ ExploreDrinksIngredients } />
      <Route path="/explore/foods/nationalities" component={ ExploreFoodsNationality } />
      <Route path="/drinks/:{id-da-receita}" component={ DetailsDrink } />
      <Route path="/foods/:{id-da-receita}" component={ DetailsFood } />
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
