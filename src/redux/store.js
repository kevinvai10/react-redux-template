import { configureStore } from '@reduxjs/toolkit';
import { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middleware = [ThunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = configureStore({ reducer: rootReducer, middleware });

export default {
    store
};
