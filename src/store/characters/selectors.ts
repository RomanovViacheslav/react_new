import { RootReducerType } from '../rootType';

export const getCharacters = (state: RootReducerType) => state.character.data;

export const getOneCharacter = (state: RootReducerType) => state.character.character;
