import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/common/Form/Form';
import FormButton from '../../components/common/Form/FormButton/FormButton';
import Input from '../../components/common/Form/Input';
import AuthPage from '../../components/pages/AuthPage';
import GetUserName from '../../store/selector';

const AuthContainer = () => {
  const name = useSelector(GetUserName);
  const navigate = useNavigate();
  useEffect(() => {
    if (name) {
      navigate('/');
    }
  }, [name]);
  return <AuthPage />;
};

export default AuthContainer;
