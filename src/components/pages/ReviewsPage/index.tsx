import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormButton from '../../common/Form/FormButton/FormButton';

type ReviewsPagePropsType = {
  productTitle: { id: number; title: string } | undefined;
};

const ReviewsPage = ({ productTitle }: ReviewsPagePropsType) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handler = () => {
    navigate(-1);
  };

  return (
    <div>
      <Link to={`/products/${id}`}>
        <h1>{productTitle?.title}</h1>
      </Link>
      <h2>Отзывы:</h2>
      <Link to="/products">к товарам</Link>
    </div>
  );
};
export default ReviewsPage;
