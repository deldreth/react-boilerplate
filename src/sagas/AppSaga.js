import { take, fork } from 'redux-saga/effects';

import Types from '../actions/Types';
import Actions from '../actions/Creators';

export function * watchAppLoaded () {
  while (true) {
    yield take(Types.APP_LOADED);
  }
}

export default function * root () {
  yield fork(watchAppLoaded);
}
