import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import "./index.css";

import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(appReducer, applyMiddleware(logger, reduxThunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
    document.getElementById("root")
);