import React, { useEffect, useState } from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState('Пароль должен быть больше 10 символов');

  const submitHandler = () => {
    if (password.length > 10) {
      setHasError(false);
      console.log({ email, password });
    } else {
      setHasError(true);
      console.log('Eror');
    }
  };

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
          <Input id="1" text="Email" setValue={setEmail} value={email} />
          <PasswordInput id="2" value={password} setValue={setPassword} />
          {hasError && <ValidationMessage text={message} />}
          <FormButton text="Войти" onClick={submitHandler} />
        </Form>
      </div>
    </main>
  );
};

export default AuthPage;
