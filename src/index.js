import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { history } from './helpers/history';
import routes from './config/routes';
import store from './config/store';

import './styles/App.css';
import './styles/Login.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
