import React from 'react';
import "./App.css";
import RobotFilterViewContainer from '../../Containers/RobotFilterViewContainer';
import ProfileViewContainer from '../../Containers/ProfileViewContainer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
        <Switch>
          <Route path="/" exact={true} component={RobotFilterViewContainer} />
          <Route path="/profile/:id" component={ProfileViewContainer} />
          <Route render={() => <h2>Page Not Found</h2> } />
        </Switch>
    </div>
  );
}

export default App;