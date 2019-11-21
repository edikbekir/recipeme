import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import HomeView from '../../views/Home';

const main= props => {
  return(
    <Switch>
      <Route path="/home" component = { HomeView }></Route>
    </Switch>
  );
}

export default main;
