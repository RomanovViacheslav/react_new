import { UserInfoActionType } from './actions';

export type UserInfoReducerType = {
  name: string;
  email: string;
  password: string;
  nameReg: string;
};

export type UserInfoActionTypeType = {
  setUserName: 'SET_USER_NAME';
  clearUserName: 'CLEAR_USER_NAME';
  setEmail: 'SET_EMAIL';
  setPassword: 'SET_PASSWORD';
  setRegName: 'SET_REG_NAME';
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

export type SetRegNameActionType = {
  type: UserInfoActionTypeType['setRegName'];
  nameReg: string;
};

export type ActionType =
  | SetUserNameActionType
  | ClearUserNameActionType
  | SetEmailActionType
  | SetPasswordActionType
  | SetRegNameActionType;
