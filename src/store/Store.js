// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import Rehydration from '../services/Rehydration';
import rootReducer from '../reducers/';
import sagas from '../sagas/';

let middleware = [];
const sagaMiddleware: Object = createSagaMiddleware();
middleware.push(sagaMiddleware);

export default (): Object => {
  let store: Object = {};

  middleware.push(createLogger());

  let enhance = [
    applyMiddleware(...middleware),
    autoRehydrate()
  ];

  const enhancers: Object = compose(...enhance);

  store = createStore(
    rootReducer,
    enhancers
  );

  Rehydration.updateReducers(store);

  sagaMiddleware.run(sagas);

  return store;
};
