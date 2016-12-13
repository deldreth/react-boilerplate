import type { EffectParams } from 'redux-effex';
import errorHandler from './error';

import Actions from '../actions/creators';
import Types from '../actions/types';

import Api from '../services/api';

async function fetchPostsAsync ({ actions, dispatch, getState }: EffectParams) {
  const response = await Api.getPosts();

  if (response.ok) {
    dispatch(Actions.receivePosts(response.data));
  } else {
    // Some error
  }
}

export default [
  {
    action: Types.FETCH_POSTS,
    effect: fetchPostsAsync,
    error: errorHandler
  }
];
