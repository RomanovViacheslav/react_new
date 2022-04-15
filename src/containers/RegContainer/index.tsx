import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/common/Form/Form';
import FormButton from '../../components/common/Form/FormButton/FormButton';
import Input from '../../components/common/Form/Input';
import RegPage from '../../components/pages/RegPage';
import { GetEmail, GetPassword, GetUserName } from '../../store/auth/selector';

const RegContainer = () => {
  const navigate = useNavigate();
  const password = useSelector(GetPassword);
  useEffect(() => {
    if (password) {
      navigate('/auth');
    }
  }, [password]);
  return <RegPage />;
};

export default RegContainer;
