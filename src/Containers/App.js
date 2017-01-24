import React, { Component } from "react";
import "./App.css";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import { apiCall } from "../api/api";
import Scroll from "../Components/Scroll";
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (evt) => dispatch(setSearchTerm(evt.target.value)),
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      isPending: true
    };
  }
  componentDidMount() {
    apiCall("https://jsonplaceholder.typicode.com/users").then(
      response => this.setState({ robots: response, isPending: false })
    );
  }



  render() {
    console.log(this.props);
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