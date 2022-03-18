import React from 'react';

import style from './Form.module.scss';

type FormPropsType = {
  title: string;
  children: React.ReactNode;
};

const Form = ({ title, children }: FormPropsType) => (
  <form className="form">
    <h1>{title}</h1>
    <div className={style.form__input}>{children}</div>
  </form>
);

export default Form;
