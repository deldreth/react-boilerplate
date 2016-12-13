import type { EffectParams } from 'redux-effex';
import errorHandler from './error';

import Actions from '../actions/creators';
import Types from '../actions/types';

async function loadedAync ({ action, dispatch, getState }: EffectParams) {
  dispatch(Actions.fetchPosts());
}

export default [
  {
    action: Types.LOADED,
    effect: loadedAync,
    error: errorHandler
  }
];
