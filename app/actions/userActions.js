import User from '../models/User';
import type { Action } from './types';

function fetch_users(): Action {
  return { type: 'FETCH_USERS' };
}

function add_users(user: User): Action {
  return { type: 'ADD_USERS', user };
}

function edit_users(user_id: number, user: User): Action {
  return { type: 'EDIT_USERS', user_id, user };
}

module.exports = {
  edit_users,
  add_users,
  fetch_users
};
