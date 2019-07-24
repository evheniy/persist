import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: '@rightnow',
  storage,
};

const emptyReducer = {
  empty: () => null,
};

export default (asyncReducers = emptyReducer) => persistCombineReducers(
  persistConfig,
  { ...asyncReducers },
);
