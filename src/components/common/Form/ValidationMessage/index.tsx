import React from 'react';
import style from './ValidationMessage.module.scss';

type ValidationMessagePropsType = {
  text: string;
};

const ValidationMessage = ({ text }: ValidationMessagePropsType) => (
  <span className={style.form__message}>{text}</span>
);

export default ValidationMessage;
