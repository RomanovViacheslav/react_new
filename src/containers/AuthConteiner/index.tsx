import React from 'react';
import Form from '../../components/common/Form/Form';
import FormButton from '../../components/common/FormButton/FormButton';
import Input from '../../components/common/Input';
import AuthPage from '../../components/pages/AuthPage';

const AuthContainer = () => (
  <AuthPage>
    <Form title="Авторизация">
      <Input text="Email" type="text" />
      <Input text="Password" type="password" />
      <FormButton text="Войти" />
    </Form>
  </AuthPage>
);

export default AuthContainer;
