import React from 'react';

const FilterTextBox = ({ filterData, setFilterData, setSelected }) => {
  const handleFilterChange = (event) => {
    setSelected(null);
    setFilterData(prevState => ({
      filtering: event.target.value.length > 0,
      filterText: event.target.value
    }));
  };

  return (
    <div>
      Find Country: 
      <input
        onChange={handleFilterChange}
        value={filterData.filterText}
      />
    </div>
  );
};

export default FilterTextBox;
