import { connect } from 'react-redux';
import { setSearchTerm } from '../actions';
import { getRobots } from '../actions';
import CardFilterView from '../Components/CardFilterView';

const mapStateToProps = (state) => {
  const searchTerm = state.search.searchTerm
  const filteredRobots = state.robotData.robots.filter(
    robot => robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    searchTerm,
    robots: filteredRobots,
    isPending: state.robotData.isPending,
  }
};

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (evt) => dispatch(setSearchTerm(evt.target.value)),
    getRobots: () => { dispatch(getRobots())},
});

export default connect(mapStateToProps, mapDispatchToProps)(CardFilterView);