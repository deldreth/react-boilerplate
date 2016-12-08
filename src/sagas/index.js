import { fork } from 'redux-saga/effects';

import AppSaga from './appSaga';
import PostSaga from './postSaga';

export default function * root () {
  yield fork(AppSaga);
  yield fork(PostSaga);
}
