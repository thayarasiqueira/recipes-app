import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Telas/Login';
import Food from './Telas/Food';
import Drinks from './Telas/Drinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './Telas/Explore';
import ExploreDrinks from './Telas/ExploreDrinks';
import ExploreFoods from './Telas/ExploreFoods';
// import DetailsDrink from './Telas/DetailsDrink';
// import DetailsFood from './Telas/DetailsFood';
import Profile from './Telas/Profile';
// import InProgress from './Telas/InProgress';
import DoneRecipes from './Telas/DoneRecipes';
import FavoriteRecipes from './Telas/FavoriteRecipes';
import ExploreFoodsIngredients from './Telas/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './Telas/ExploreDrinksIngredients';
import ExploreFoodsNationalities from './Telas/ExploreFoodsNationalities';

function App() {
  return (

    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Food } />
      <Route exact path="/drinks" component={ Drinks } />
      {/* <Route exact path="/foods/:id" component={ DetailsDrink } />
      <Route exact path="/drinks/:id" component={ DetailsFood } /> */}
      {/* <Route exact path="/foods/:id/in-progress" component={ InProgress } />
      <Route exact path="/drinks/:id/in-progress" component={ InProgress } /> */}
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodsIngredients }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreDrinksIngredients }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreFoodsNationalities }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
