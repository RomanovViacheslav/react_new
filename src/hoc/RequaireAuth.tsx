import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import ReviewsContainer from '../containers/ReviewsContainer';

const RequaireAuth = () => {
  const location = useLocation();
  const auth = false;

  if (!auth) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }
  return <ReviewsContainer />;
};

export default RequaireAuth;
