import { connect } from 'react-redux';
import ProfileView from '../Components/ProfileView';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10);
  
  if (state.robotData.robots.length) {
    const robot = state.robotData.robots.find((robot) => robot.id === id);
    return {
      robot: Object.assign({}, robot, {
        img: `//robohash.org/${id}?size=400x400`
      }),
      isPending: false
    };
  }

  return { robot: null, isPending: true };
};

export default connect(
  mapStateToProps, 
)(ProfileView);