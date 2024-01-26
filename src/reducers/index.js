// src/reducers/index.js
import { combineReducers } from 'redux';
import dynamicFieldsReducer from './dynamicFieldsReducer';

const rootReducer = combineReducers({
  dynamicFields: dynamicFieldsReducer,
});

export default rootReducer;
