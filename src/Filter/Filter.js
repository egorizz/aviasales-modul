/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';

import { setFilterMode } from '../store/actions';

const Filter = ({ state, initSetFilterMode }) => {
  let lowClass;
  let fstClass;
  let optClass;
  if (state.filterMode === 'low') {

          lowClass = { backgroundColor: 'rgba(33, 150, 243, 1)', border: '1px solid rgba(33, 150, 243, 1)', color: 'white' };


  }
  if (state.filterMode === 'fst') {
    fstClass = { backgroundColor: 'rgba(33, 150, 243, 1)', border: '1px solid rgba(33, 150, 243, 1)', color: 'white' };
  }
  if (state.filterMode === 'opt') {
    optClass = { backgroundColor: 'rgba(33, 150, 243, 1)', border: '1px solid rgba(33, 150, 243, 1)', color: 'white' };
  }

  return (
    <div className="filter" onClick={initSetFilterMode}>
      <div className="filter__tab" style={lowClass} id="low">
        САМЫЙ ДЕШЕВЫЙ
      </div>
      <div className="filter__tab" style={fstClass} id="fst">
        САМЫЙ БЫСТРЫЙ
      </div>
      <div className="filter__tab" style={optClass} id="opt">
        ОПТИМАЛЬНЫЙ
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initSetFilterMode: (e) => {
      setTimeout(() => {
        dispatch(setFilterMode(e.target.id));
      }, 50);
      
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
