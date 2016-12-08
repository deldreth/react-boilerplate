import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

import Types from '../actions/types';

export const INITIAL_STATE = Immutable({
  posts: []
});

const receivePosts = (state = INITIAL_STATE, action) =>
  state.merge({
    posts: action.posts
  });

const ACTION_HANDLERS = {
  [Types.RECEIVE_POSTS]: receivePosts
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
