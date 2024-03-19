/* eslint-disable */



import React from 'react';
import { connect } from 'react-redux';

import { setCheckBoxes } from '../store/actions';

const FilterOptions = ({ state, initSetCheckBoxes }) => {
  const class1 = !state.stops1 ? 'filter-options__checkbox' : 'filter-options__checkbox checked';
  const class2 = !state.stops2 ? 'filter-options__checkbox' : 'filter-options__checkbox checked';
  const class3 = !state.stops3 ? 'filter-options__checkbox' : 'filter-options__checkbox checked';
  const classAll = !state.stopsAll ? 'filter-options__checkbox' : 'filter-options__checkbox checked';
  const classFree = !state.stopsFree ? 'filter-options__checkbox' : 'filter-options__checkbox checked';

  return (
    <div className="filter-options" onClick={initSetCheckBoxes}>
      <div className="filter-options__header">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className="filter-options__body">
        <div className="filter-options__option" id="all">
          <div className={classAll} id="all"></div>
          <div className="filter-options__label" id="all">Все</div>
        </div>
        <div className="filter-options__option" id="no_stops">
          <div className={classFree} id="no_stops"></div>
          <div className="filter-options__label" id="no_stops">Без пересадок</div>
        </div>
        <div className="filter-options__option" id='1'>
          <div className={class1} id="1"></div>
          <div className="filter-options__label" id="1">1 пересадка</div>
        </div>
        <div className="filter-options__option" id="2">
          <div className={class2} id="2"></div>
          <div className="filter-options__label" id="2">2 пересадки</div>
        </div>
        <div className="filter-options__option" id="3">
          <div className={class3} id="3"></div>
          <div className="filter-options__label" id="3">3 пересадки</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initSetCheckBoxes: (e) => dispatch(setCheckBoxes(e.target.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterOptions);
