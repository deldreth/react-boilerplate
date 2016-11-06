import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import createLogger from 'redux-logger';

import Rehydration from '../services/Rehydration';
import rootReducer from '../reducers/';

let middleware = [];

export default () => {
  let store = {};

  middleware.push(createLogger());

  let enhance = [
    applyMiddleware(...middleware),
    autoRehydrate()
  ];

  const enhancers = compose(...enhance);

  store = createStore(
    rootReducer,
    enhancers
  );

  // configure persistStore and check reducer version number
  Rehydration.updateReducers(store);

  // run sagas
  // sagaMiddleware.run(sagas);

  return store;
};
