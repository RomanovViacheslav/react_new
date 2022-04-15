import { url } from 'inspector';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharactersPage from '../../components/pages/CharactersPage/CharactersPage';
import makeRequest from '../../network';
import { GetCharactersAction } from '../../store/characters/actions';
import { getCharacters } from '../../store/characters/selectors';

const CharactersContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCharactersAction());
  }, []);

  const characterData = useSelector(getCharacters);

  return <CharactersPage characterData={characterData} />;
};

export default CharactersContainer;
