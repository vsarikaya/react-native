import { combineReducers } from 'redux';
import users from './userReducers';

/* eslint-disable global-require */
const reducers = combineReducers({
  users
});
/* eslint-enable global-require */

export default reducers;
