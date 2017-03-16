import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

class ProfileView extends Component {
  componentWillMount () {
    console.log('profileview will mount')
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
      <Link className="button" to="/">Back</Link>
      </div>
    )
  }
}

export default ProfileView;