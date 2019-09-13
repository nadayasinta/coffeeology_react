import React from "react";
import { Provider } from "unistore/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from "../store/store";

// import pages
import RecipesSelection from "../pages/RecipesSelection";
import Brewing from "../pages/Brewing";
import RecipeDetail from "../pages/RecipeDetail";
import Test from "../pages/test";
import RecipeDemo from "../pages/RecipeDemo";
import Login from "../pages/loginTest";
import Register from "../pages/register";
import Activity from "../pages/activity";
import CreateRecipe from "../pages/CreateRecipe";

function Routes() {
  return (
    <Provider store={store} className="allpage container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Brewing} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/recipes" component={RecipesSelection} />
          <Route exact path="/recipedemo" component={RecipeDemo} />
          <Route exact path="/recipedetail" component={RecipeDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/recipecreate" component={CreateRecipe} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;
