import React from 'react';
import { Link } from 'react-router-dom';
import style from './CardCharacter.module.scss';

type CardCharacterPropsType = {
  id: number;
  name: string;
  img: string;
  alt: string;
};

const CardCharacter: React.FC<CardCharacterPropsType> = (props) => {
  const { name, img, alt, id } = props;

  return (
    <div className={style.card}>
      <Link to={`${id}`}>
        <h2 className={style.card__header}>{name}</h2>

        <div className={style.card__content}>
          <img className={style.card__img} src={img} alt={alt} />
        </div>
      </Link>
    </div>
  );
};

export default CardCharacter;
