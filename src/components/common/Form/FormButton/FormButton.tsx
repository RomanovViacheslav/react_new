import React from 'react';
import style from './FormButton.module.scss';

type FormButtonPropsType = {
  text: string;
  onClick: () => void;
};

const FormButton = ({ text, onClick }: FormButtonPropsType) => (
  <button className={style.form__btn} type="button" onClick={onClick}>
    {text}
  </button>
);

export default FormButton;
