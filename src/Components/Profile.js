import React from 'react';

const Profile = ({id = 1, robots}) => {
  const robot = robots.find((robot) => robot.id == id) 
  return (

    <div>
      { robot && 
        <div className="profile">
          <div className="column headshot">
            <div>
              <img src={`//robohash.org/${id}?size=400x400`} />
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
            <a href={`mailto:${robot.email}`}>Email</a>
          </div>
        </div>
      }
    </div>
  );
}

export default Profile