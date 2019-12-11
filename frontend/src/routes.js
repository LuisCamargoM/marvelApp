import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';

import PrivateRoute from "./auth";

const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </Router>
  );
  export default Routes;