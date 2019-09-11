import React from "react";
// import { store } from "./store/store";
import { Provider, connect } from "unistore/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Brewing from '../pages/brewing'

function Routes() {
    return (
        // <Provider store={store} className="allpage">
        <BrowserRouter>
            <Switch>
                <Route exact path="/brewing" component={Brewing} />
            </Switch>
        </BrowserRouter>
        // </Provider>
    );
}

export default Routes;
