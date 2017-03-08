import React from 'react';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";

const CardFilterView = ({ 
  onSearchChange, 
  searchTerm, 
  isPending, 
  robots }) => {

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
    );
}

CardFilterView.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
  isPending: React.PropTypes.bool.isRequired,
  robots: React.PropTypes.array
};

export default CardFilterView;