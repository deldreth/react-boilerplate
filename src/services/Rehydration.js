// @flow
import ReduxPersist from '../config/Persist';
import { persistStore } from 'redux-persist';

declare var localStorage: Object;

const updateReducers = ( store: Object ): void => {
  const reducerVersion: string = ReduxPersist.reducerVersion;
  const config: Object = ReduxPersist.storeConfig;
  const startup = (): Object =>
    store.dispatch({ type: 'LOADED' });

  let localVersion: string = localStorage.getItem('reducerVersion');
  if (localVersion !== reducerVersion) {
    // Purge store and refresh
    persistStore(store, config, startup).purge();
    localStorage.setItem('reducerVersion', reducerVersion);
  } else {
    persistStore(store, config, startup);
  }
};

export default { updateReducers };
