/* globals localStorage */

import ReduxPersist from '../config/Persist';
import { persistStore } from 'redux-persist';

const updateReducers = (store) => {
  const reducerVersion = ReduxPersist.reducerVersion;
  const config = ReduxPersist.storeConfig;
  const startup = () => store.dispatch({ type: 'LOADED' });

  let localVersion = localStorage.getItem('reducerVersion');
  if (localVersion !== reducerVersion) {
    // Purge store and refresh
    persistStore(store, config, startup).purge();
    localStorage.setItem('reducerVersion', reducerVersion);
  } else {
    persistStore(store, config, startup);
  }
};

export default {updateReducers};
