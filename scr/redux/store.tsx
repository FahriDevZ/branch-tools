/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { MakeStore } from 'next-redux-wrapper';
import reducers, { RootState } from './reducers';

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = (x: any) => x;

// noinspection JSUnresolvedVariable
if (
  process.env.NODE_ENV !== 'production' &&
  process.browser &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__();
}

const create = (initialState: RootState) => {
  let middleware: any[] = [];

  // noinspection JSUnresolvedVariable
  if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    !(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    // redux-logger needs this feature
    Object['assign'] // eslint-disable-line dot-notation
  ) {
    // eslint-disable-next-line global-require
    const createLogger = require('redux-logger').createLogger;

    middleware = [...middleware, createLogger()];
  }

  return createStore(
    reducers,
    initialState, // Hydrate the store with server-side data
    compose(applyMiddleware(thunk, ...middleware), devtools),
  );
};

const makeStore: MakeStore = (initialState: RootState) => {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse store on the client-side
  if (!(global as any).__INIT_REDUX_STORE__) {
    (global as any).__INIT_REDUX_STORE__ = create(initialState);
  }

  return (global as any).__INIT_REDUX_STORE__;
};

export type Store = import('redux').Store;

// eslint-disable-next-line import/prefer-default-export
export { makeStore };
