import React from 'react';
import { Provider, connect } from 'unistore/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from '../store/store';

// import pages
// import Brewing from '../pages/brewing';
import RecipesSelection from '../pages/RecipesSelection';
import Brewing from '../pages/Brewing';
import RecipeDetail from '../pages/RecipeDetail';
import { Test } from '../pages/test';
import RecipeDemo from '../pages/RecipeDemo';
import CreateRecipe from '../pages/CreateRecipe';

function Routes() {
  return (
      <Provider store={store} className="allpage">
          <BrowserRouter>
              <Switch>
                  <Route exact path="/brewing" component={Brewing} />
                  <Route exact path="/test" component={Test} />
                  <Route exact path="/recipes" component={RecipesSelection} />
                  <Route exact path="/recipedemo" component={RecipeDemo} />
                  <Route
                      exact
                      path="/recipedetail"
                      component={RecipeDetail}
                    />
                  <Route exact path="/recipecreate" component={CreateRecipe} />
                </Switch>
            </BrowserRouter>
        </Provider>
  );
}

export default Routes;
