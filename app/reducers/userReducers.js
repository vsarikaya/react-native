import User from '../models/User';
import type { Action } from '../actions/types';

const initialState = {
  isLoading: true,
  usersList: []
};

type State = {
  isLoading: boolean,
  usersList: Array<User>
};

export default function users(state: State = initialState, action: Action): State {

  switch (action.type) {

  case 'FETCH_USERS':
    return {
      ...state,
      isLoading: false
    };

  case 'ADD_USERS': {
    return {
      ...state,
      usersList: [...state.usersList, action.user]
    };
  }

  default:
    return state;

  }
}
