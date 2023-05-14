import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { loadState } from "../utility/browser-storage";

import AuthRedux from './AuthRedux';


const reducers = combineReducers({
  auth: AuthRedux
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
//   preloadedState: loadState(),
});