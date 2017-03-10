// @flow
import { take, fork, call, put } from 'redux-saga/effects';
import type { Effect } from 'redux-saga/effects';

import Api from '../services/api';
import type { Response } from '../services/api';

import { Types, Actions } from '../actions';

export function * watchFetchPosts (): Generator<Effect, void, *> {
  while ( true ) {
    yield take( Types.FETCH_POSTS );

    const response: Response = yield call( Api.getPosts );

    if ( response.ok ) {
      yield put( Actions.receivePosts( response.data ) );
    } else {
      // Some error
    }
  }
}

export default function * root (): Generator<Effect, void, *> {
  yield fork(watchFetchPosts);
}
