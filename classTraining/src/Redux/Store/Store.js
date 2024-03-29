import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  createStore,
} from 'redux';
// import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import fromReducer from '../Reducers/Reducers';
const rootReducer = combineReducers({
  fromReducer,
});
export const store = legacy_createStore(rootReducer);
