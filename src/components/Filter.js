import React from "react";

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      Find countries <input value={filter} onChange={handleFilterChange} />
    </>
  );
};

export default Filter;
