import React from 'react';
import "./App.css";
import RobotFilterViewContainer from '../../Containers/RobotFilterViewContainer';
import ProfileViewContainer from '../../Containers/ProfileViewContainer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
        <Route path="/" exact={true} component={RobotFilterViewContainer} />
        <Route path="/profile/:id" component={ProfileViewContainer} />
    </div>
  );
}

export default App;