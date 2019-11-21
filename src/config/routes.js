import React from 'react'
import { Route, Redirect, Switch } from 'react-router';
import Blank from '../components/layouts/Blank';
import Main from '../components/layouts/Main';

export default (
  <Switch>
    <Route path="/login" component={Blank} />
    <Route component={Main} />
  </Switch>
);
