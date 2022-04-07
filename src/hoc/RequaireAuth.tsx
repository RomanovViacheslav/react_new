/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

import GetUserName from '../store/selector';

const RequaireAuth: React.FC = ({ children }) => {
  const location = useLocation();
  const auth = useSelector(GetUserName);

  if (auth) {
    return <>{children}</>;
  }
  return <Navigate to="/auth" state={{ from: location }} />;
};

export default RequaireAuth;
