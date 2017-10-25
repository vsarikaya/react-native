import { combineReducers } from 'redux';

/* eslint-disable global-require */
const userReducers = combineReducers({
  users: require('./userReducers')
});
/* eslint-enable global-require */

export default userReducers;
