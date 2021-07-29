import React from 'react';
import Welcome from "../pages/Welcome/Welcome";
import { Events } from '../pages/Events';

import { Route, Switch, Redirect } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';


export const MainRoutes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Main/Welcome" component={Welcome} />
        <Route exact path="/">
          <Redirect to="/Main/Welcome" />
        </Route>
        <Route exact path="/Main">
          <Redirect to="/Main/Welcome" />
        </Route>
        <Route exact path="/Main/Events" component={Events} />
      </Switch>
    </div>
  );
};