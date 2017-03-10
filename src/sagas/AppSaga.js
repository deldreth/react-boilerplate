// @flow
import { take, fork, put } from 'redux-saga/effects';
import type { Effect } from 'redux-saga/effects';

import { Types, Actions } from '../actions';

export function * watchAppLoaded (): Generator<Effect, void, *> {
  while ( true ) {
    yield take( Types.LOADED );

    yield put( Actions.fetchPosts() );
  }
}

export default function * root (): Generator<Effect, void, *> {
  yield fork( watchAppLoaded );
}
