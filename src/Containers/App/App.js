import React, { Component } from "react";
import {BrowserRouter as Router, Route,} from 'react-router-dom'

import "./App.css";
import RobotFilterViewContainer from "../RobotFilterViewContainer";
import RobotProfileViewContainer from "../RobotProfileViewContainer";
import { connect } from 'react-redux';
import { getRobots } from '../../actions';

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
            <Route exact={true} path="/" component={RobotFilterViewContainer} />
            <Route path="/profile/:id" component={RobotProfileViewContainer} />
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