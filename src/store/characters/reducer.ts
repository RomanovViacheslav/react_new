import { CharactersActionType } from './actions';
import { CharactersReducerType, ActionType } from './type';

const initialState: CharactersReducerType = {
  data: [],
  character: {},
};

const charactersReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CharactersActionType.getCharacters:
      return {
        ...state,
        data: action.payload,
      };
    case CharactersActionType.getOneCharacter:
      return {
        ...state,
        character: action.payload,
      };
    case CharactersActionType.clearCharacter:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default charactersReducer;
