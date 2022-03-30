import React, { ChangeEvent, Children, useEffect, useState } from 'react';
import Form from '../../common/Form/Form';
import FormButton from '../../common/Form/FormButton/FormButton';
import Input from '../../common/Form/Input';
import PasswordInput from '../../common/Form/PasswordInput/PasswordiInput';
import ValidationMessage from '../../common/Form/ValidationMessage';
import PageWrapper from '../../common/PageWrapper';
import style from './RegPage.module.scss';

const RegPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [hasErrorPassword, setHasErrorPassword] = useState(false);
  const [hasErrorConfirm, setHasErrorConfirm] = useState(false);
  const [hasErrorEmail, setHasErrorEmail] = useState(false);
  const [hasErrorName, setHasErrorName] = useState(false);
  const [message, setMessage] = useState('');

  const submitHandler = () => {
    if (password !== confirm) {
      console.log('Error');
      setHasErrorConfirm(true);
      setMessage('Пароли не совпадают');
    } else if (password.length < 10) {
      console.log('Error');
      setHasErrorConfirm(true);
      setHasErrorPassword(true);
      setMessage('Пароль должен быть больше 10 символов');
    } else {
      setHasErrorConfirm(false);
      setHasErrorPassword(false);
      console.log(name, email, password, confirm);
    }
  };

  useEffect(() => {
    if (password.length > 0) {
      if (password.length > 10) {
        setHasErrorPassword(false);
      } else {
        setHasErrorPassword(true);
        setMessage('Пароль должен быть больше 10 символов');
        setHasErrorConfirm(false);
      }
    }
  }, [password]);

  return (
    <main className={style.content}>
      <div className={style.content__container}>
        <Form title="Регистрация">
          <Input text="Name" id="3" value={name} setValue={setName} />
          <Input id="1" text="Email" setValue={setEmail} value={email} />
          <PasswordInput id="5" value={password} setValue={setPassword} />
          {hasErrorPassword && <ValidationMessage text={message} />}
          <PasswordInput id="6" text="Confirm Password" value={confirm} setValue={setConfirm} />
          {hasErrorConfirm && <ValidationMessage text={message} />}
          <FormButton text="Зарегистрироваться" onClick={submitHandler} />
        </Form>
      </div>
    </main>
  );
};

export default RegPage;
