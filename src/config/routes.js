import React from 'react'

import { Route, Redirect, Switch } from 'react-router';
import Blank from '../components/layouts/Blank';

export default (
  <Switch>
    <Route path="/login" component={Blank} />
  </Switch>
);
