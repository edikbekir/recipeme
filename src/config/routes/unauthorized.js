import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import LoginView from '../../views/Login';
import SignUpView from '../../views/SignUp';

const unauthorized=(props)=>{
    return (
      <Switch>
        <Route path="/login" component={ LoginView}></Route>
        <Route path="/signup" component = { SignUpView }></Route>
      </Switch>
    )}

export default unauthorized;
