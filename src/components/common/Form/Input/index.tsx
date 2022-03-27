import React, { ChangeEvent, Children, useState } from 'react';
import ValidationMessage from '../ValidationMessage';
import style from './Input.module.scss';

type InputPropsType = {
  text: string;
  type?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  id: string;
};

const Input: React.FC<InputPropsType> = ({
  text,
  type = 'text',
  setValue,
  id,
  value,
  children,
}) => {
  const [error, setError] = useState(false);

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const blurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <label className={style.form__label} htmlFor={id}>
      <input
        className={error ? style.form__input_error : style.form__input}
        id={id}
        placeholder={text}
        type={type}
        value={value}
        onChange={handler}
        onBlur={blurHandler}
      />
      <div>{error && <ValidationMessage text="Поле должно быть заполнено" />}</div>
      {children}
    </label>
  );
};

export default Input;
