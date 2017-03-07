import React from 'react';
import { connect } from 'react-redux';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import { setSearchTerm } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
    robots: state.robotData.robots,
    isPending: state.robotData.isPending,
  }
};

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (evt) => dispatch(setSearchTerm(evt.target.value)),
})

const CardFilterView = ({ 
  onSearchChange, 
  searchTerm, 
  isPending, 
  robots }) => {
  const filteredRobots = robots.filter(
    robot => robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <SearchBox 
        onSearchChange={onSearchChange} />
        <Scroll>
          {
            isPending
              ? <h2>Loading... { searchTerm }</h2>
              : <CardList robots={filteredRobots} />
          }
        </Scroll>
    </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CardFilterView);