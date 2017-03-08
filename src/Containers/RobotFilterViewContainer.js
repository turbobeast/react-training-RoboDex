import { connect } from 'react-redux';
import { setSearchTerm } from '../actions';
import { getRobots } from '../actions';
import CardFilterView from '../Components/CardFilterView';

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
    robots: state.robotData.robots,
    isPending: state.robotData.isPending,
  }
};

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (evt) => dispatch(setSearchTerm(evt.target.value)),
    getRobots: () => { dispatch(getRobots())},
})

export default connect(mapStateToProps, mapDispatchToProps)(CardFilterView);