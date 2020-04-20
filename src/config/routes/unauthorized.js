import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import LoginView from '../../views/Login';

const unauthorized=(props)=>{
    return <Switch>
        <Route path="/login" component={LoginView}></Route>
    </Switch>

    }

export default unauthorized; 
