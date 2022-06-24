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
import ProviderDetailsFood from './context/ProviderDetailsFood';
import ProviderDetailsDrinks from './context/DetailsDrinks/ProviderDetailsDrinks';

function App() {
  return (
    <ProviderDetailsFood>
      <ProviderDetailsDrinks>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route
            path="/foods/:id"
            component={ DetailsFood }
          />
          <Route exact path="/foods" component={ Food } />
          <Route path="/drinks/:id" component={ DetailsDrink } />
          <Route exact path="/drinks" component={ Drinks } />
          {/*  <Route path="/profile" component={ Profile } /> */}
          {/* <Route path="/drinks" component={ Drinks } /> */}
          <Route exact path="/explore" component={ Explore } />
          <Route path="/explore/foods" component={ ExploreFoods } />
          <Route path="/explore/drinks" component={ ExploreDrinks } />
          <Route path="/foods/:id/in-progress" component={ InProgress } />
          <Route path="/profile" component={ Profile } />
        </Switch>
      </ProviderDetailsDrinks>
    </ProviderDetailsFood>
  );
}

export default App;
