// @flow
import { createActions } from 'reduxsauce';
import type { PostType } from '../components/post';

export type ActionTypes =
            | { type: 'LOADED' }
            | { type: 'FETCH_POSTS' }
            | { type: 'RECEIVE_POSTS', posts: Array<PostType> };

export const { Types, Actions } = createActions( {
  loaded: null,
  fetchPosts: null,
  receivePosts: [ 'posts' ]
} );
