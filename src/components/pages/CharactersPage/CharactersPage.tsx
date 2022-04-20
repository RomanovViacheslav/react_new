import React from 'react';

import CardCharacter from '../../common/CardCharacter';
import FormButton from '../../common/Form/FormButton/FormButton';
import style from './CharacterPage.module.scss';

type CharactersPropsType = {
  characterData: any[];
  nextHandler: () => void;
  prevHandler: () => void;
};
const CharactersPage = ({ characterData, nextHandler, prevHandler }: CharactersPropsType) => (
  <div>
    <div className={style.content__container}>
      <h2>Персонажи</h2>
      <div className={style.card__section}>
        {characterData.length ? (
          characterData.map((el) => (
            <CardCharacter key={el.id} id={el.id} name={el.name} img={el.image} alt="сахар" />
          ))
        ) : (
          <h2>Загрузка</h2>
        )}
        <FormButton text="PREV" onClick={prevHandler} />
        <FormButton text="NEXT" onClick={nextHandler} />
      </div>
    </div>
  </div>
);

export default CharactersPage;
