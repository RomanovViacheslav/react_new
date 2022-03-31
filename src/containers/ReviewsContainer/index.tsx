import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewsPage from '../../components/pages/ReviewsPage';
import { data } from '../../helpers';

const ReviewsContainer = () => {
  const { id } = useParams();

  const product = data.find((el) => el.id === Number(id));
  return <ReviewsPage productTitle={product} />;
};

export default ReviewsContainer;
