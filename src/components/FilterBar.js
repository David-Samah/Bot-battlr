import React from 'react';

function FilterBar({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,  
      [name]: checked, 
    }));
  };

  return (
    <div className="filter-bar">
      <h3>Filter Bots by Class</h3>
      <label>
        <input
          type="checkbox"
          name="Support"
          checked={filters.Support || false}
          onChange={handleFilterChange}
        />
        Support
      </label>
      <label>
        <input
          type="checkbox"
          name="Medic"
          checked={filters.Medic || false}
          onChange={handleFilterChange}
        />
        Medic
      </label>
      <label>
        <input
          type="checkbox"
          name="Assault"
          checked={filters.Assault || false}
          onChange={handleFilterChange}
        />
        Assault
      </label>
      <label>
        <input
          type="checkbox"
          name="Defender"
          checked={filters.Defender || false}
          onChange={handleFilterChange}
        />
        Defender
      </label>
      <label>
        <input
          type="checkbox"
          name="Captain"
          checked={filters.Captain || false}
          onChange={handleFilterChange}
        />
        Captain
      </label>
      <label>
        <input
          type="checkbox"
          name="Witch"
          checked={filters.Witch || false}
          onChange={handleFilterChange}
        />
        Witch
      </label>
    </div>
  );
}

export default FilterBar;
