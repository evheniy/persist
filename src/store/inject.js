import store from '.';
import createReducer from './reducers';

const asyncReducers = {};

const injectReducer = (nameSpace, reducer) => {
  if (asyncReducers[nameSpace]) {
    console.warn(`Replacing reducer for ${nameSpace}`); // eslint-disable-line
  } else {
    console.warn(`Injecting reducer for ${nameSpace}`); // eslint-disable-line
  }

  asyncReducers[nameSpace] = reducer;

  store.replaceReducer(createReducer(asyncReducers));

  if (store.persistor) {
    store.persistor.persist();
  }
};

export default injectReducer;
