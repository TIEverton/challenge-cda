import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
