import { connect } from 'react-redux';
import { getRobots } from '../actions';
import ProfileView from '../Components/ProfileView';

console.log('PROFILEVEWCONTAINER IS INCLUDED');
const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10) || 1;
  const isPending = state.robotData.isPending;
  let robot = null;

  if (!isPending) {
    robot = state.robotData.robots.find((robot) => robot.id === id);
  }

  return {
    robot,
    isPending,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRobots: () => dispatch(getRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)