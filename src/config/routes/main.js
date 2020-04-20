import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import HomeView from '../../views/Home';
import ShopView from '../../views/Shop';

const main = props => {
  return (
    <Switch>
      <Route path="/home" component = { HomeView }></Route>
      <Route path="/shop" component = { ShopView }></Route>
    </Switch>
)}

export default main;
