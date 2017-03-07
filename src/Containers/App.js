import React, { Component } from "react";
import {BrowserRouter as Router, Route,} from 'react-router-dom'

import "./App.css";
import CardFilterView from "../Components/CardFilterView";
import Profile from "../Components/Profile";
import { connect } from 'react-redux';
import { getRobots } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    getRobots: () => { dispatch(getRobots())},
  }
}

class App extends Component {
  componentDidMount() {
    this.props.getRobots();
  }

  render() {    
    return (
      <div className="tc">
        <h1>RoboDex</h1>
        <Router>
          <div>
            <Route exact={true} path="/" component={CardFilterView} />
            <Route path="/profile/:id" component={Profile} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(App);