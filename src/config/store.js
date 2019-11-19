import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../data/reducers';
import { createLogger } from 'redux-logger';

const isDevelopment = process.env.NODE_ENV === `development`;

const loggerMiddleware = isDevelopment ? createLogger() : null;

const middleware = [
    thunkMiddleware,
    isDevelopment && loggerMiddleware
].filter(Boolean);

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(
  rootReducer,
  applyMiddleware(
    ...middleware
  )
);

export default store;
