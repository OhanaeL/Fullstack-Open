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
      <input
        onChange={handleFilterChange}
        value={filterData.filterText}
        placeholder="Filter by name or number"
      />
    </div>
  );
};

export default FilterTextBox;
