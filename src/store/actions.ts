import { UserInfoActionTypeType } from './types';

export const UserInfoActionType: UserInfoActionTypeType = {
  setUserName: 'SET_USER_NAME',
  clearUserName: 'CLEAR_USER_NAME',
  setEmail: 'SET_EMAIL',
  setPassword: 'SET_PASSWORD',
  setRegName: 'SET_REG_NAME',
};

export const SetUserNameAction = (name: string) => ({
  type: UserInfoActionType.setUserName,
  payload: name,
});

export const ClearUserNameAction = () => ({
  type: UserInfoActionType.clearUserName,
});

export const SetEmailAction = (email: string) => ({
  type: UserInfoActionType.setEmail,
  email,
});

export const SetPasswordAction = (password: string) => ({
  type: UserInfoActionType.setPassword,
  password,
});

export const SetRegNameAction = (nameReg: string) => ({
  type: UserInfoActionType.setRegName,
  nameReg,
});
