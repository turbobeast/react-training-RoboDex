import React, { Component } from "react";
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
        <CardFilterView />
      </div>
    );
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(App);