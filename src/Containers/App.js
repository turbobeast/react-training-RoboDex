import React, { Component } from "react";
import "./App.css";
import RobotFilterViewContainer from './RobotFilterViewContainer';

class App extends Component {
  render() {

    return (
      <div className="tc">
        <h1>RoboDex</h1>
          <RobotFilterViewContainer />
      </div>
    );
  }
}

export default App;