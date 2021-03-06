import makeRequest from '../../network';
import { CharactersActionTypeType } from './type';

export const CharactersActionType: CharactersActionTypeType = {
  getCharacters: 'GET_CHARACTERS',
  getOneCharacter: 'GET_ONE_CHARACTERS',
  clearCharacter: 'CLEAR_CHARACTER',
};

export const GetCharactersAction = (page: number) => async (dispatch: any) => {
  const data = await makeRequest({ url: '/character', params: { page } });
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

export const ClearCharacterAction = () => ({
  type: CharactersActionType.clearCharacter,
});
