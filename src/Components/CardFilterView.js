import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';

class CardFilterView extends Component {
  componentWillMount () {
    this.props.getRobots();
  }

  render () {
    const { 
      onSearchChange,
      searchTerm,
      isPending,
      robots } = this.props;

    return (
      <div>
        <SearchBox onSearchChange={onSearchChange} searchTerm={searchTerm} />
          <Scroll>
            {
              isPending
                ? <h2>Loading... { searchTerm }</h2>
                : <CardList robots={robots} />
            }
          </Scroll>
      </div>
    )
  }
}

CardFilterView.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
  isPending: React.PropTypes.bool.isRequired,
  robots: React.PropTypes.array
};

export default CardFilterView;