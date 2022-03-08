import React from 'react';
import Input from './input';

type FormPropsType = {
  title: string;
  children: React.ReactNode;
};

const Form = ({ title, children }: FormPropsType) => (
  <div className="form">
    <h1>{title}</h1>
    <div className="form__input">{children}</div>
  </div>
);

export default Form;
