import React from 'react';

const FilterTextBox = ({ filterData, setFilterData }) => {
  const handleFilterChange = (event) => {
    setFilterData(prevState => ({
      filtering: event.target.value.length > 0,
      filterText: event.target.value
    }));
  };

  return (
    <div>
      Filter shown with: 
      <input
        onChange={handleFilterChange}
        value={filterData.filterText}
      />
    </div>
  );
};

export default FilterTextBox;
