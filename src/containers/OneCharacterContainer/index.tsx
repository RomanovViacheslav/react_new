import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OneCharacterPage from '../../components/pages/OneCharacterPage';
import { GetCharactersAction, GetOneCharacterAction } from '../../store/characters/actions';
import { getOneCharacter } from '../../store/characters/selectors';

const OneCharacterContainer = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneCharacterAction(id));
  }, [id]);

  const characterData = useSelector(getOneCharacter);

  console.log(characterData);

  return <OneCharacterPage characterData={characterData} />;
};

export default OneCharacterContainer;
