import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

const logger = createLogger();
let initialState;

try {
  initialState = window.__INITIAL_STATE__;
  delete window.__INITIAL_STATE__;
} catch(_) {
  initialState = undefined;
}

export default () => createStore(appReducer, initialState, applyMiddleware(reduxThunk));
