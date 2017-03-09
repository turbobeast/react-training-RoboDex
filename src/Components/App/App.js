import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom'

import './App.css';
import RobotFilterViewContainer from '../../Containers/RobotFilterViewContainer';
import RobotProfileViewContainer from '../../Containers/RobotProfileViewContainer';

function App () {  
  return (
    <div className='tc'>
      <h1>RoboDex</h1>
      <Router>
        <div>
          <Route exact={true} path='/' component={RobotFilterViewContainer} />
          <Route path='/profile/:id' component={RobotProfileViewContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;