import { combineReducers } from 'redux';

import AppReducer from './AppReducer';

const allReducers = combineReducers({
  app: AppReducer
});

export default (state, action) => {
  return allReducers(state, action);
};

// Specify any reducer keys that shouldn't persist
export const persistentStoreBlacklist = [];
