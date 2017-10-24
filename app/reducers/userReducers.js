import React from 'react';
import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import * as Model from '../actions';

const initialState = {
    type : SHOW_USERS,
    users : [
        {
            name : 'Volkan',
            age : 29
        },
        {
            name : 'Ahmet',
            age : 27
        }
    ]
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case Model.SHOW_USERS:
            return state.users
            break;
    
        case Model.ADD_USERS:
            return [
                ...state.users,
                {
                    name : 'Mehmet',
                    age : 35
                }
            ];
            break;

        default:
            return state.users
            break;
    }
}

