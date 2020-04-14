import { combineReducers, createStore } from 'redux';
import { Modal } from './reducers';
export const reducers = combineReducers({
  Modal,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};

export const store = configureStore();
