import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import HomeView from '../../views/Home';
import Recognize from '../../views/Recognize';

const main= props => {
  return(
    <Switch>
      <Route path="/home" component = { HomeView }></Route>
        <Route path="/recognize" component = { Recognize }></Route>
    </Switch>
  );
}

export default main;
