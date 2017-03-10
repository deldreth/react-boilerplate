// @flow
import { persistentStoreBlacklist } from '../reducers/';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    blacklist: persistentStoreBlacklist,
    transforms: []
  }
};

export default REDUX_PERSIST;
