import { CharactersReducerType } from './characters/type';
import { UserInfoReducerType } from './auth/types';

export type RootReducerType = {
  auth: UserInfoReducerType;
  character: CharactersReducerType;
};
