import React, { Component } from "react";
import "./App.css";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import { apiCall } from "../api/api";
import Scroll from "../Components/Scroll";
import { connect } from 'react-redux';
import { setSearchTerm, getRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
    robots: state.robotData.robots,
    isPending: state.robotData.isPending,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (evt) => dispatch(setSearchTerm(evt.target.value)),
    getRobots: () => { dispatch(getRobots())},
  }
}

class App extends Component {
  
  componentDidMount() {
    this.props.getRobots();
  }



  render() {
    const { robots, isPending } = this.state;
    const { onSearchChange, searchTerm } = this.props;
    const filteredRobots = robots.filter(
      robot => robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div className="tc">
        <h1>RoboDex</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          {
            isPending
              ? <h2>Loading...</h2>
              : <CardList robots={filteredRobots} />
          }
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);