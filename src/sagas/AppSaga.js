import { take, fork, put } from 'redux-saga/effects';

import Types from '../actions/types';
import Actions from '../actions/creators';

export function * watchAppLoaded () {
  while (true) {
    yield take(Types.LOADED);

    yield put(Actions.fetchPosts());
  }
}

export default function * root () {
  yield fork(watchAppLoaded);
}
