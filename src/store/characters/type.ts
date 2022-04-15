export type CharactersActionTypeType = {
  getCharacters: 'GET_CHARACTERS';
  getOneCharacter: 'GET_ONE_CHARACTERS';
  clearCharacter: 'CLEAR_CHARACTER';
};

export type CharactersReducerType = {
  data: [];
  character: {};
};

export type GetCharactersActionType = {
  type: CharactersActionTypeType['getCharacters'];
  payload: any[];
};

export type GetOneCharacterActionType = {
  type: CharactersActionTypeType['getOneCharacter'];
  payload: {};
};

export type ClearCharacterActionType = {
  type: CharactersActionTypeType['clearCharacter'];
};

export type ActionType =
  | GetCharactersActionType
  | GetOneCharacterActionType
  | ClearCharacterActionType;
