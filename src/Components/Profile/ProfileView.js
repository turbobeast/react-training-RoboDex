import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Profile from './Profile';
import './Profile.css'

class ProfileView extends Component {
  componentWillMount () {
    this.props.getRobot();
  }

  render () {
    const { isPending, robot } = this.props;
    return (
      <div className='profilePage'>
        {
          isPending
          ? <h2>Loading... </h2>
          : <Profile robot={robot} />
        }
        <Link className='button' to={`/`}>Go Back</Link>
      </div>
    );
  }
}

ProfileView.propTypes = {
  isPending: React.PropTypes.bool.isRequired,
  robot: React.PropTypes.object,
};

export default ProfileView;