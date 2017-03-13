import { connect } from 'react-redux';
import ProfileView from '../Components/Profile/ProfileView';
import { getRobot } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10);
  
  if (state.robotData.robots.length) {
    const robot = state.robotData.robots.find((robot) => robot.id === id);
    return {
      robot: Object.assign({}, robot, {
        img: `//robohash.org/${id}?size=400x400`
      }),
      isPending: state.robotData.isPending,
    };
  }

  return { robot: null, isPending: state.robotData.isPending };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getRobot: () => { 
    dispatch(getRobot(ownProps.match.params.id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileView);