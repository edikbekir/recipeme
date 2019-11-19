import React from 'react'

import { Route, Redirect, Switch } from 'react-router';
import App from '../components/App';
export default (
  <Switch>
    <Route path="/" component={App} />
  </Switch>
);
