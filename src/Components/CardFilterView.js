import React from 'react';
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";



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

export default CardFilterView;