'use strict';

export const SHOW_USERS = 'SHOW_USERS';
export const ADD_USERS = 'ADD_USERS';

export function show_users() {
    return { type : SHOW_USERS }
}

export function add_users(user) {
    return { type : ADD_USERS, user}
}