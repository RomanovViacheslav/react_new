import React from 'react';
import { useParams } from 'react-router-dom';
import OneCardPage from '../../components/pages/OneCardPage/OneCardPage';
import { data } from '../../helpers/index';

const OneCardContainer = () => {
  const { id } = useParams();

  const card = data.find((el) => el.id === Number(id));
  return <OneCardPage cardsInfo={card} />;
};

export default OneCardContainer;
