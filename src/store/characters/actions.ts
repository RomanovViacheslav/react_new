import makeRequest from '../../network';
import { CharactersActionTypeType } from './type';

export const CharactersActionType: CharactersActionTypeType = {
  getCharacters: 'GET_CHARACTERS',
  getOneCharacter: 'GET_ONE_CHARACTERS',
};

export const GetCharactersAction = () => async (dispatch: any) => {
  const data = await makeRequest({ url: '/character' });
  dispatch({
    type: CharactersActionType.getCharacters,
    payload: data.results,
  });
};

export const GetOneCharacterAction = (id: string | undefined) => async (dispatch: any) => {
  const data = await makeRequest({ url: `/character/${id}` });
  dispatch({
    type: CharactersActionType.getOneCharacter,
    payload: data,
  });
};
