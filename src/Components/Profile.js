import React from 'react';
import { Link } from 'react-router-dom'

const Profile = ({id = 1, robots}) => {
  
  const robot = robots.find((robot) => robot.id === id) 
  
  return (

    <div className="profilePage">
      { robot && 
        <div className="profile">
          <div className="column headshot">
            <div>
              <img alt="" src={`//robohash.org/${id}?size=400x400`} />
            </div>
            <h2>{robot.name}</h2>
          </div>
          <div className="column address">
           <h3>Address</h3>
            <p>
              { robot.address.street},&nbsp;
              { robot.address.suite}
            </p>
            <p>{ robot.address.city}</p>
            <p>{ robot.address.zipcode}</p>
            <a className="button" href={`mailto:${robot.email}`}>Email</a>
          </div>
        </div>
      }
    <Link className="button" to={`/`}>Go Back</Link>
    </div>
  );
}

export default Profile;