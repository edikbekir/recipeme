import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import HomeView from '../../views/Home';
import Recognize from '../../views/Recognize';
import Delivery from '../../views/Delivery';
import Orders from '../../views/Orders';

const main= props => {
  return(
    <Switch>
      <Route path="/home" component = { HomeView }></Route>
        <Route path="/recognize" component = { Recognize }></Route>
        <Route path="/delivery" component = { Delivery }></Route>
      <Route path="/orders" component = { Orders }></Route>
    </Switch>
  );
}

export default main;
