import React from 'react';

import CardCharacter from '../../common/CardCharacter';
import style from './CharacterPage.module.scss';

type CharactersPropsType = {
  characterData: any[];
};
const CharactersPage = ({ characterData }: CharactersPropsType) => (
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
      </div>
    </div>
  </div>
);

export default CharactersPage;
