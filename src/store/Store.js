import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { effectsMiddleware } from 'redux-effex';

import Rehydration from '../services/Rehydration';
import rootReducer from '../reducers/';
import effects from '../effects/';

let middleware = [];
middleware.push(effectsMiddleware(effects));

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

  Rehydration.updateReducers(store);

  return store;
};
