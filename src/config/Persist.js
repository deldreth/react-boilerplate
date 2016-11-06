/* globals localStorage */

import immutablePersistenceTransform from '../store/ImmutablePersistenceTransform';
import { persistentStoreBlacklist } from '../reducers/';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    blacklist: persistentStoreBlacklist,
    transforms: [immutablePersistenceTransform]
  }
};

export default REDUX_PERSIST;
