// @flow
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from 'ducks/reducers';

const { devToolsExtension } = window;

export default function configureStore(initialState?: ?Object, middlewares: Array<any>) {
  const middleware = applyMiddleware(...middlewares);
  const composed = compose(
    middleware,
    process.env.NODE_ENV !== 'production' && devToolsExtension
      ? devToolsExtension()
      : f => f,
  );

  const store = createStore(rootReducer, initialState, composed);

  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./ducks/reducers', () => {
      const nextRootReducer = require('./ducks/reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
