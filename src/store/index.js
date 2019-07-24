import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { REHYDRATE, PERSIST } from 'redux-persist/lib/constants';

import createReducer from './reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    predicate: (getState, action) => ![REHYDRATE, PERSIST].includes(action.type),
  });
  middlewares.push(logger);
}

const composeEnhancers = composeWithDevTools({});

const serverState = 'STATE_FROM_SERVER';

const storeParams = [
  createReducer(),
  window[serverState],
  composeEnhancers(applyMiddleware(...middlewares)),
];

const store = createStore(...storeParams);

export default store;
