import React from 'react';
import "./App.css";
import RobotFilterViewContainer from '../../Containers/RobotFilterViewContainer';
import ProfileViewContainer from '../../Containers/ProfileViewContainer';
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="tc">
      <h1>RoboDex</h1>
        <Switch>
          <Route path="/" exact={true} component={RobotFilterViewContainer} />
          <Route path="/profile/:id" render={(props) => {
            const rawId = props.match.params.id;
            const intId = parseInt(rawId, 10);
            if (!isNaN(intId) && intId <= 10 && intId > 0) {
              return <ProfileViewContainer {...props} />
            }
            return <h2>No Robot for id {rawId}</h2>
          }} />
          <Route render={() => <Redirect to={{ pathname: '/' }} />} />
        </Switch>
    </div>
  );
}

export default App;