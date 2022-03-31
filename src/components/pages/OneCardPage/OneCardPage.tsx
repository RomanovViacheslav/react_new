import { userInfo } from 'os';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormButton from '../../common/Form/FormButton/FormButton';
import style from './OneCardPage.module.scss';

type OneCardsPagePropsType = {
  cardsInfo:
    | { id: number; title: string; wt: string; price: string; img: string; description: string }
    | undefined;
};

const OneCardPage = ({ cardsInfo }: OneCardsPagePropsType) => {
  console.log(cardsInfo);
  const { id } = useParams();
  const navigate = useNavigate();

  const handler = () => {
    navigate('/products', { state: { isOpen: true } });
  };
  return (
    <div className={style.products__wrapper}>
      <h2>{cardsInfo?.title}</h2>
      <h3>{cardsInfo?.wt}</h3>
      <h3>{cardsInfo?.price}</h3>
      <p>{cardsInfo?.description}</p>
      <Link className={style.products__link_reviews} to={`/products/${id}/reviews`}>
        Отзывы о товаре
      </Link>
      <img src={cardsInfo?.img} alt="" />

      <div className={style.products__footer}>
        <Link className={style.products__link} to="/products">
          все товары
        </Link>
        <FormButton text="НАЗАД" onClick={handler} />
      </div>
    </div>
  );
};

export default OneCardPage;
