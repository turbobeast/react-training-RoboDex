import React from 'react';
import "./App.css";
import RobotFilterViewContainer from '../../Containers/RobotFilterViewContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import Lazy from '../Lazy';

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
        <Switch>
          <Route path="/" exact={true} component={RobotFilterViewContainer} />
          <Route path="/profile/:id" render={(props) => {
            return <Lazy path={'../Containers/ProfileViewContainer'} {...props} />
          }} />
          <Route render={() => <Redirect to={{ pathname: '/' }} />} />
        </Switch>
    </div>
  );
}

export default App;