import { UserInfoActionType } from './actions';

export type UserInfoReducerType = {
  name: string;
  email: string;
  password: string;
};

export type UserInfoActionTypeType = {
  setUserName: 'SET_USER_NAME';
  clearUserName: 'CLEAR_USER_NAME';
  setEmail: 'SET_EMAIL';
  setPassword: 'SET_PASSWORD';
};

export type SetUserNameActionType = {
  type: UserInfoActionTypeType['setUserName'];
  payload: string;
};

export type ClearUserNameActionType = {
  type: UserInfoActionTypeType['clearUserName'];
};

export type SetEmailActionType = {
  type: UserInfoActionTypeType['setEmail'];
  email: string;
};

export type SetPasswordActionType = {
  type: UserInfoActionTypeType['setPassword'];
  password: string;
};

export type ActionType =
  | SetUserNameActionType
  | ClearUserNameActionType
  | SetEmailActionType
  | SetPasswordActionType;
