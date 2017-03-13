import React from 'react';
import "./App.css";
import RobotFilterViewContainer from '../../Containers/RobotFilterViewContainer';
import ProfileViewContainer from '../../Containers/ProfileViewContainer';

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
        {/*<RobotFilterViewContainer />*/}
        <ProfileViewContainer />
    </div>
  );
}

export default App;