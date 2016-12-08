import { take, fork, call } from 'redux-saga/effects';

import Types from '../actions/Types';
import Actions from '../actions/Creators';

import Api from '../services/Api';
const api = Api.create();

export function * watchAppLoaded () {
  while (true) {
    yield take(Types.LOADED);
  }
}

export default function * root () {
  yield fork(watchAppLoaded);
}
