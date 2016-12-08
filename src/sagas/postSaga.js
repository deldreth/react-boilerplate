import { take, fork, call, put } from 'redux-saga/effects';

import Types from '../actions/types';
import Actions from '../actions/creators';
import Api from '../services/api';

export function * watchFetchPosts () {
  while (true) {
    yield take(Types.FETCH_POSTS);

    const response = yield call(Api.getPosts);

    if (response.ok) {
      yield put(Actions.receivePosts(response.data));
    } else {
      // Some error
    }
  }
}

export default function * root () {
  yield fork(watchFetchPosts);
}
