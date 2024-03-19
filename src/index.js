import React from 'react';
import ReactDOM from 'react-dom/client';

import AppAviasales from './AppAviasales';
import './index.css';
// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './store/reducer';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import getAll from './store/actions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider> */}

    <AppAviasales />
    {/* </Provider> */}
  </React.StrictMode>
);
