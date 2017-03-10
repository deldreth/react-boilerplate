// @flow
import { createReducer } from 'reduxsauce';

type State = {
  posts: Array<Object>
};

import { Types } from '../actions';

export const INITIAL_STATE = {
  posts: []
};

const ACTION_HANDLERS = {
  [ Types.RECEIVE_POSTS ]: (state: State = INITIAL_STATE, action): Object =>
    Object.assign( {}, state, {
      posts: action.posts
    } )
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
