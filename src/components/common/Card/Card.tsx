import React from 'react';
import style from './Card.module.scss';

type CardPropsType = {
  title: string;
  img: string;
  alt: string;
  unit: string;
  price: string;
};

const Card: React.FC<CardPropsType> = (props) => {
  const { title, img, alt, unit, price, children } = props;

  return (
    <div className={style.card}>
      <h2 className={style.card__header}>{title}</h2>
      <div className={style.card__content}>
        <img className={style.card__img} src={img} alt={alt} />
        <div className={style.card__content_text}>
          <span className={style.card__unit}>{unit}</span>
          <span className={style.card__price}>{price}</span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
