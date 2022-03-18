import React from 'react';
import Form from '../../components/common/Form/Form';
import FormButton from '../../components/common/FormButton/FormButton';
import Input from '../../components/common/Input';
import AuthPage from '../../components/pages/RegPage';

const RegContainer = () => (
  <AuthPage>
    <Form title="Регистрация">
      <Input text="Name" type="text" />
      <Input text="Email" type="text" />
      <Input text="Password" type="password" />
      <Input text="Confirm Password" type="password" />
      <FormButton text="Зарегистрироваться" />
    </Form>
  </AuthPage>
);

export default RegContainer;
