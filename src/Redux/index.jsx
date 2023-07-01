import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { loadState } from "../utility/browser-storage";

import AuthRedux from './AuthRedux';
import OrderRedux from './OrderRedux';

const reducers = combineReducers({
  auth: AuthRedux,
  order: OrderRedux
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
//   preloadedState: loadState(),
});