import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

const logger = createLogger();
export default () => createStore(appReducer, applyMiddleware(logger, reduxThunk));
