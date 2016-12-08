import { combineReducers } from 'redux';

import AppReducer from './appReducer';
import PostReducer from './postReducer';

const allReducers = combineReducers({
  app: AppReducer,
  post: PostReducer
});

export default (state, action) => {
  return allReducers(state, action);
};

// Specify any reducer keys that shouldn't persist
export const persistentStoreBlacklist = [];
