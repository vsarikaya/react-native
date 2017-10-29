import User from '../models/User';
import type { Action } from '../actions/types';

const initialState = {
  isLoading: true,
  usersList: [
    new User(111, 'Volkan', 29),
    new User(222, 'Ahmet', 30)
  ]
};

type State = {
  isLoading: boolean,
  usersList: Array<User>
};

export default function users(state: State = initialState, action: Action): State {

  switch (action.type) {

  case 'SHOW_USERS':
    return {
      ...state,
      isLoading: false
    };

  case 'ADD_USERS': {
    return {
      isLoading: true,
      usersList: [...state.usersList, action.user]
    };
  }

  case 'EDIT_USERS':
    return state.usersList.map((user: User): State => {
      if (user.id === action.user_id) {
        return Object.assign({}, user, {
          id: user.id,
          fullname: user.fullname,
          age: user.age
        });
      }
      return user;
    });

  default:
    return state;

  }
}
