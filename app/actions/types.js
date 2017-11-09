import User from '../models/User';

type ParseObject = Object;


export type Action =
    { type: 'FETCH_USERS' }
  | { type: 'EDIT_USERS', user_id: number, user: User }
  | { type: 'ADD_USERS', user: User };

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

