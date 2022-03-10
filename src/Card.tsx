import React from 'react';

type CardPropsType = {
  title: string;
  img: string;
  alt: string;
  unit: string;
  price: string;
  children: React.ReactNode;
};

const Card = (props: CardPropsType) => {
  const { title, img, alt } = props;
  const { unit, price, children } = props;
  return (
    <div className="card">
      <h2 className="card__header">{title}</h2>
      <div className="card__content">
        <img className="card__img" src={img} alt={alt} />
        <div className="card__content-text">
          <span className="card__unit">{unit}</span>
          <span className="card__price">{price}</span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
