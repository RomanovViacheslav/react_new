import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import OneCharacterPage from '../../components/pages/OneCharacterPage';
import { ClearCharacterAction, GetOneCharacterAction } from '../../store/characters/actions';
import { getOneCharacter } from '../../store/characters/selectors';

const OneCharacterContainer = () => {
  const { id } = useParams();
  // const [search, setSearch] = useSearchParams();
  // const currPage = +search.get('page')!;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneCharacterAction(id));
    return () => {
      dispatch(ClearCharacterAction());
    };
  }, [id]);

  const characterData: any = useSelector(getOneCharacter);

  console.log(characterData);

  return characterData.id ? <OneCharacterPage characterData={characterData} /> : <h1>LOADING</h1>;
};

export default OneCharacterContainer;
