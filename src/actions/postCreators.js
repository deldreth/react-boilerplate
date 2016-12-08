import Types from './postTypes';

const fetchPosts = () => ({
  type: Types.FETCH_POSTS
});

const receivePosts = (posts) => ({
  type: Types.RECEIVE_POSTS,
  posts
});

export default {
  fetchPosts,
  receivePosts
};
