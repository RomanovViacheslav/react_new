import { RootReducerType } from '../rootType';

export const GetUserName = (state: RootReducerType) => state.auth.name;

export const GetEmail = (state: RootReducerType) => state.auth.email;

export const GetPassword = (state: RootReducerType) => state.auth.password;

export const GetRegName = (state: RootReducerType) => state.auth.nameReg;
