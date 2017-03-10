// @flow
import { fork } from 'redux-saga/effects';
import type { Effect } from 'redux-saga/effects';

import AppSaga from './appSaga';
import PostSaga from './postSaga';

export default function * root (): Generator<Effect, void, *> {
  yield fork( AppSaga );
  yield fork( PostSaga );
}
