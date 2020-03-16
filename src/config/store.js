import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../data/reducers';
import { createLogger } from 'redux-logger';

const isDevelopment = process.env.NODE_ENV === `development`;

const loggerMiddleware = isDevelopment ? createLogger() : null;

const middleware = [
    thunkMiddleware,
    isDevelopment && loggerMiddleware
].filter(Boolean);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
          ...middleware
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
