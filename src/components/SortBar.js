
import React from 'react';

const SortBar = ({ setSortType }) => {
  return (
    <div className="sort-bar">
      <button onClick={() => setSortType('health')}>Sort by Health</button>
      <button onClick={() => setSortType('damage')}>Sort by Damage</button>
      <button onClick={() => setSortType('armor')}>Sort by Armor</button>
    </div>
  );
};

export default SortBar;
