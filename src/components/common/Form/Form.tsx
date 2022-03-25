import React from 'react';

import style from './Form.module.scss';

type FormPropsType = {
  title: string;
  children: React.ReactNode;
};

const Form = ({ title, children }: FormPropsType) => (
  <div className="form">
    <h1>{title}</h1>
    <form className={style.form__input}>{children}</form>
  </div>
);

export default Form;
