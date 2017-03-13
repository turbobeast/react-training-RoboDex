import React, { Component } from 'react';
import Profile from './Profile';

class ProfileView extends Component {
  componentWillMount () {
    this.props.getRobots()
  }

  render () {
    const { isPending, robot } = this.props;
    return (
      <div className="profilePage">
        {
          isPending
          ? <h2>Loading... </h2>
          : <Profile robot={robot} />
        }
      </div>
    )
  }
}

export default ProfileView;