import React from "react";
import { Provider, connect } from "unistore/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import alert
import store from "../store/store";

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
import AddStep from "../pages/addStep";
import InputStep from "../pages/inputStep";
import Review from "../pages/Review";

function Routes() {
  return (
    <Provider store={store} className="allpage container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Brewing} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/recipes" component={RecipesSelection} />
          <Route exact path="/recipedemo" component={RecipeDemo} />
          <Route exact path="/recipes/:recipeID" component={RecipeDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/recipecreate" component={CreateRecipe} />
          <Route exact path="/addstep" component={AddStep} />
          <Route exact path="/inputstep" component={InputStep} />
          <Route exact path="/recipereview" component={Review} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;
