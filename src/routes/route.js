
import React from 'react';
import { store } from '../store/store';
import { Provider, connect } from 'unistore/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import pages
// import Brewing from '../pages/brewing';
import RecipesSelection from '../pages/recipesSelection';
import Brewing from '../pages/brewing';
import RecipeDetail from "../pages/recipeDetail";
import { Test } from '../pages/test';
import Steps from '../pages/steps';

function Routes() {
	return (
		<Provider store={store} className="allpage">
			<BrowserRouter>
				<Switch>
					<Route exact path="/brewing" component={Brewing} />
					<Route exact path="/test" component={Test} />
					<Route exact path="/recipes" component={RecipesSelection} />
					<Route exact path="/steps" component={Steps} />
    <Route
                        exact
                        path="/recipedetail"
                        component={RecipeDetail}
                    />
				</Switch>
			</BrowserRouter>
		</Provider>
	);

}

export default Routes;
