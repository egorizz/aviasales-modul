import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const initialState = {
  filterMode: 'opt',
  searchId: null,
  tickets: [],
  stops1: true,
  stops2: true,
  stops3: true,
  stopsAll: true,
  stopsFree: true,
  buttonLoading: false,
  endPoint: 5,
  message: 'Что-то пошло не так',
  success: false,
};
// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  if (action.type === 'SET_SUCCESS') {
    return { ...state, success: action.flag };
  }
  if (action.type === 'LOAD_MESSAGE') {
    return { ...state, message: action.value };
  }
  if (action.type === 'ADD_PAGES') {
    return { ...state, endPoint: state.endPoint + 5 };
  }
  if (action.type === 'LOAD_TICKETS') {
    const newList = [...state.tickets, ...action.tickets];

    return { ...state, tickets: newList };
  }
  if (action.type === 'SEARCH_ID_LOAD') {
    return { ...state, searchId: action.searchId };
  }
  if (action.type === 'SET_FILTER_MODE') {
    return { ...state, filterMode: action.mode };
  }
  if (action.type === 'SET_LOADING') {
    if (action.flag) {
      return { ...state, buttonLoading: action.flag };
    }
    return { ...state, buttonLoading: action.flag };
  }

  if (action.type === 'SET_CHECKBOXES') {
    const { stops1, stops2, stops3, stopsAll, stopsFree } = state;
    if (action.checkbox === 'all' && stopsAll) {
      return { ...state, stops1: false, stops2: false, stops3: false, stopsAll: false, stopsFree: false };
    }
    if (action.checkbox === 'all' && !stopsAll) {
      return { ...state, stops1: true, stops2: true, stops3: true, stopsAll: true, stopsFree: true };
    }

    if (action.checkbox === 'no_stops' && !stopsFree) {
      if (stops1 && stops2 && stops3) {
        return { ...state, stopsFree: true, stopsAll: true };
      }
      return { ...state, stopsFree: true };
    }
    if (action.checkbox === 'no_stops' && stopsFree) {
      return { ...state, stopsFree: false, stopsAll: false };
    }

    if (action.checkbox === '1' && !stops1) {
      if (stops2 && stops3 && stopsFree) {
        return { ...state, stops1: true, stopsAll: true };
      }
      return { ...state, stops1: true };
    }
    if (action.checkbox === '1' && stops1) {
      return { ...state, stops1: false, stopsAll: false };
    }

    if (action.checkbox === '2' && !stops2) {
      if (stops1 && stops3 && stopsFree) {
        return { ...state, stops2: true, stopsAll: true };
      }
      return { ...state, stops2: true };
    }
    if (action.checkbox === '2' && stops2) {
      return { ...state, stops2: false, stopsAll: false };
    }

    if (action.checkbox === '3' && !stops3) {
      if (stops1 && stops2 && stopsFree) {
        return { ...state, stops3: true, stopsAll: true };
      }
      return { ...state, stops3: true };
    }
    if (action.checkbox === '3' && stops3) {
      return { ...state, stops3: false, stopsAll: false };
    }
  }

  return state;
};

/* eslint-disable */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

function loggerMiddleWare(store) {
  return function (next) {
    return function (action) {
      const result = next(action);
      console.log('middleware: ', result);
      return result;
    };
  };
}
/* eslint-enable */
const store = configureStore({ reducer }, composeEnhancers(applyMiddleware(loggerMiddleWare, thunk)));

export default store;
