import React, { Component } from "react";
import "./App.css";
import CardList from "../Components/CardList";
import CardFilterView from "../Components/CardFilterView";
import Profile from "../Components/Profile";
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
    console.log(this.props);
    this.props.getRobots();
  }

  render() {
    console.log(this.props);
    const { robots, isPending, onSearchChange, searchTerm } = this.props;
    
    return (
      <div className="tc">
        <h1>RoboDex</h1>
        <Profile />
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);