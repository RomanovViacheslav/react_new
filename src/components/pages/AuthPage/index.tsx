import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { SetUserNameAction } from '../../../store/auth/actions';
import { GetEmail, GetPassword, GetRegName } from '../../../store/auth/selector';
import Footer from '../../common/Footer';
import Form from '../../common/Form/Form';
import FormButton from '../../common/Form/FormButton/FormButton';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/PasswordInput/PasswordiInput';
import ValidationMessage from '../../common/Form/ValidationMessage';
import Header from '../../common/Header';

import PageWrapper from '../../common/PageWrapper';
import style from './AuthPage.module.scss';

const AuthPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState('Пароль должен быть больше 10 символов');
  const navigate = useNavigate();

  const passwordReg = useSelector(GetPassword);
  const emailReg = useSelector(GetEmail);

  const submitHandler = () => {
    if (password.length > 10) {
      setHasError(false);
      dispatch(SetUserNameAction(name));
      console.log({ name, password });
    } else {
      setHasError(true);
      console.log('Eror');
    }
  };

  useEffect(() => {
    if (passwordReg) {
      setPassword(passwordReg);
      setName(emailReg);
    }
  }, []);

  useEffect(() => {
    if (password.length > 0) {
      if (password.length > 10) {
        setHasError(false);
      } else {
        setHasError(true);
      }
    }
  }, [password]);

  return (
    <main className={style.content}>
      <div className={style.content__container}>
        <Form title="Авторизация">
          <Input id="name" text="Name" setValue={setName} value={name} />
          <PasswordInput id="2" value={password} setValue={setPassword} />
          {hasError && <ValidationMessage text={message} />}
          <FormButton text="Войти" onClick={submitHandler} />
        </Form>
      </div>
    </main>
  );
};

export default AuthPage;
