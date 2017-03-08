import { connect } from 'react-redux';
import Profile from '../Components/Profile';

const mapStateToProps = (state, ownProps) => {
  return {
    robots: state.robotData.robots,
    id: parseInt(ownProps.match.params.id, 10),
  }
};

export default connect(
  mapStateToProps, 
)(Profile);