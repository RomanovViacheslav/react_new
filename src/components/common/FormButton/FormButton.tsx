import React from 'react';
import style from './FormButton.module.scss';

type FormButtonPropsType = {
  text: string;
};

const FormButton = ({ text }: FormButtonPropsType) => (
  <button className={style.form__btn} type="button">
    {text}
  </button>
);

export default FormButton;
