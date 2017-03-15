import React from "react";

const SearchBox = props => {
  const { onSearchChange, searchTerm } = props;
  return (
    <div className="pa2">
      <input className="pa2" type="search" value={searchTerm} placeholder="search Robots..." onChange={
        onSearchChange
      } />
    </div>
  );
};

SearchBox.propTypes = { onSearchChange: React.PropTypes.func.isRequired };

export default SearchBox