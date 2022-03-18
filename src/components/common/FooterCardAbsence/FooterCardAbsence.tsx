import React from 'react';
import style from './FooterCardAbsence.module.scss';

const FooterCardAbsence = () => {
  const [text, setText] = React.useState('Товар отсутствует');
  const [textStyle, setTextStyle] = React.useState(`${style.footer__text}`);
  const [nameButton, setNameButton] = React.useState(`${style.button__absence}`);

  const addHandler = () => {
    setText('Добавлено в лист ожидания');
    setTextStyle(`${style.footer__text_active}`);
    setNameButton(`${style.button__absence_active}`);
  };

  return (
    <div>
      <p className={textStyle}>{text}</p>
      <button className={nameButton} type="button" onClick={addHandler}>
        В лист ожидания
      </button>
    </div>
  );
};
export default FooterCardAbsence;
