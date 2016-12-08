import apisauce from 'apisauce';

import Settings from '../config/Settings';

const create = (baseURL = Settings.api_url) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 15000
  });

  const getPosts = () =>
    api.get('/posts');

  return {
    getPosts
  };
};

export default {
  create
};
