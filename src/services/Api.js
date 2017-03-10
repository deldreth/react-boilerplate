// @flow
import apisauce from 'apisauce';

import Settings from '../config/Settings';

export type Response = {
  ok: boolean,
  data: Object
};

export default ( ( baseURL: string = Settings.api_url ): Object => {
  const api: Object = apisauce.create({
    baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 15000
  });

  const getPosts: Function = () =>
    api.get('/posts');

  return {
    getPosts
  };
} )();
