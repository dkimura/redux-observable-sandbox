// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import 'rxjs';

import App from 'App';
import configureStore from 'store';
import rootEpic from 'ducks/operations';

const store = configureStore({}, [createEpicMiddleware(rootEpic)]);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
