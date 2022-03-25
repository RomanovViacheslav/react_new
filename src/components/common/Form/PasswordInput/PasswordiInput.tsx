import React, { Children, useState } from 'react';
import Input from '../Input';
import style from './PasswordInput.module.scss';
import Eye from './akar-icons_eye-slashed.svg';
import Eye2 from './akar-icons_eye-open.svg';

type PasswordInputPropsType = {
  id: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  text?: string;
};

const PasswordInput: React.FC<PasswordInputPropsType> = ({
  id,
  setValue,
  value,
  text = 'Password',
}) => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(`${Eye2}`);
  const showPassword = () => {
    if (type === 'text') {
      setType('password');
      setIcon(`${Eye2}`);
    } else {
      setType('text');
      setIcon(`${Eye}`);
    }
  };

  return (
    <div>
      <Input id={id} text={text} type={type} value={value} setValue={setValue}>
        <button className={style.icon__password} type="button" onClick={showPassword}>
          <img src={icon} alt="" />
        </button>
      </Input>
    </div>
  );
};

export default PasswordInput;
