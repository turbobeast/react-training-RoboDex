import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App";
import "./index.css";

import appReducer from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(appReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
    document.getElementById("root")
);