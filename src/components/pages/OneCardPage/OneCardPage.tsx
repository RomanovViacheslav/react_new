import { userInfo } from 'os';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type OneCardsPagePropsType = {
  cardsInfo: { id: number; title: string; wt: string; price: string } | undefined;
};

const OneCardPage = ({ cardsInfo }: OneCardsPagePropsType) => {
  console.log(cardsInfo);

  const navigate = useNavigate();

  const handler = () => {
    navigate('/products', { state: { isOpen: true } });
  };
  return (
    <>
      <h1>Product Info</h1>
      <h2>{cardsInfo?.title}</h2>
      <h3>{cardsInfo?.wt}</h3>
      <h3>{cardsInfo?.price}</h3>
      <Link to="/products">все товары</Link>
      <button type="button" onClick={handler}>
        НАЗАД
      </button>
    </>
  );
};

export default OneCardPage;
