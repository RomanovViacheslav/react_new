import { UserInfoReducerType } from './types';

export const GetUserName = (state: UserInfoReducerType) => state.name;

export const GetEmail = (state: UserInfoReducerType) => state.email;

export const GetPassword = (state: UserInfoReducerType) => state.password;

export const GetRegName = (state: UserInfoReducerType) => state.nameReg;
