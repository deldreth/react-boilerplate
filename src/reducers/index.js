// @flow
import { combineReducers } from 'redux';

import AppReducer from './appReducer';
import PostReducer from './postReducer';

const allReducers: Function = combineReducers({
  app: AppReducer,
  post: PostReducer
});

export default ( state: Object, action: Object ) => {
  return allReducers( state, action );
};

// Specify any reducer keys that shouldn't persist
export const persistentStoreBlacklist = [];
