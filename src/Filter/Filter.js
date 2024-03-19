import React from 'react';

const Filter = ({ filterHandler, filterMode }) => {
  let lowClass;
  let fstClass;
  if (filterMode === 'low') {
    lowClass = { backgroundColor: 'rgba(33, 150, 243, 1)', border: '1px solid rgba(33, 150, 243, 1)', color: 'white' };
  }
  if (filterMode === 'fst') {
    fstClass = { backgroundColor: 'rgba(33, 150, 243, 1)', border: '1px solid rgba(33, 150, 243, 1)', color: 'white' };
  }

  return (
    <div className="filter" onClick={filterHandler}>
      <div className="filter__tab" style={lowClass} id="low">
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div className="filter__tab" style={fstClass} id="fst">
        САМЫЙ БЫСТРЫЙ
      </div>
      <div className="filter__tab" style={{ backgroundColor: 'rgba(33, 150, 243, 0.3)' }}>
        ОПТИМАЛЬНЫЙ
      </div>
    </div>
  );
};

export default Filter;
