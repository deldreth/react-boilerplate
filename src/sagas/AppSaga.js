import { take, fork, call } from 'redux-saga/effects';

import Types from '../actions/Types';
import Actions from '../actions/Creators';

import Api from '../services/Api';

export function * watchAppLoaded () {
  while (true) {
    yield take(Types.LOADED);

    const response = yield call(Api.getPosts);
    if (response.ok) {
      // do something with response.data
    }
  }
}

export default function * root () {
  yield fork(watchAppLoaded);
}
