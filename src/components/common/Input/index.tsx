import React from 'react';
import style from './Input.module.scss';

type InputPropsType = {
  text: string;
  type: string;
};

const Input = ({ text, type }: InputPropsType) => (
  <label htmlFor="1">
    <input className={style.form__input} id="1" placeholder={text} type={type} />
  </label>
);

export default Input;
