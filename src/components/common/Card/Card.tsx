import React from 'react';
import { Link } from 'react-router-dom';
import FooterCard from '../FooterCard/FooterCard';
import FooterCardAbsence from '../FooterCardAbsence/FooterCardAbsence';
import style from './Card.module.scss';

type CardPropsType = {
  id: number;
  title: string;
  img: string;
  alt: string;
  unit: string;
  price: string;
  stock: boolean;
};

const Card: React.FC<CardPropsType> = (props) => {
  const { title, img, alt, unit, price, id, stock } = props;

  return (
    <div className={style.card}>
      <Link to={`${id}`}>
        <h2 className={style.card__header}>{title}</h2>

        <div className={style.card__content}>
          <img className={style.card__img} src={img} alt={alt} />
          <div className={style.card__content_text}>
            <span className={style.card__unit}>{unit}</span>
            <span className={style.card__price}>{price}</span>
          </div>
        </div>
      </Link>
      <div>{stock ? <FooterCard /> : <FooterCardAbsence />}</div>
    </div>
  );
};

export default Card;
