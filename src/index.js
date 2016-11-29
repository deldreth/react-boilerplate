import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import App from './containers/App';

const store = Store();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
