import * as Model from '../actions';

const initialState = {
  type: Model.SHOW_USERS,
  users: [
    {
      name: 'Volkan',
      age: 29
    },
    {
      name: 'Ahmet',
      age: 27
    }
  ]
};

export default function users(state = initialState, action) {
  switch (action.type) {
  case Model.SHOW_USERS:
    return state.users;

  case Model.ADD_USERS:
    return [
      ...state.users,
      {
        name: 'Mehmet',
        age: 35
      }
    ];

  default:
    return state.users;

  }
}

