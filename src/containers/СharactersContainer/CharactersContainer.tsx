import { url } from 'inspector';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import CharactersPage from '../../components/pages/CharactersPage/CharactersPage';
import makeRequest from '../../network';
import { GetCharactersAction } from '../../store/characters/actions';
import { getCharacters } from '../../store/characters/selectors';

const CharactersContainer = () => {
  const dispatch = useDispatch();
  const { state } = useLocation() as { state: { page: string } };

  const [search, setSearch] = useSearchParams();
  const currPage = +search.get('page')!;

  useEffect(() => {
    if (state?.page) {
      setSearch({ page: state.page });
      dispatch(GetCharactersAction(+state.page));
    } else {
      dispatch(GetCharactersAction(currPage));
    }
  }, []);

  const prevHandler = () => {
    if (currPage !== 1) {
      setSearch({ page: `${currPage - 1}` });
    }
    dispatch(GetCharactersAction(currPage - 1));
  };

  const nextHandler = () => {
    if (currPage === 0) {
      setSearch({ page: `${currPage + 2}` });
      dispatch(GetCharactersAction(currPage + 2));
    } else {
      setSearch({ page: `${currPage + 1}` });
      dispatch(GetCharactersAction(currPage + 1));
    }
  };

  const characterData: any = useSelector(getCharacters);
  console.log(characterData);
  return (
    <CharactersPage
      characterData={characterData}
      prevHandler={prevHandler}
      nextHandler={nextHandler}
    />
  );
};

export default CharactersContainer;
