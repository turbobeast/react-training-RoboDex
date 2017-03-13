import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import "./index.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>, 
  document.getElementById("root")
);