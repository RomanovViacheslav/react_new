import React from 'react';

const FooterCardAbsence = () => {
  const [text, setText] = React.useState('Товар отсутствует');
  const [textStyle, setTextStyle] = React.useState('footer__text');
  const [nameButton, setNameButton] = React.useState('button__absence');

  const addHandler = () => {
    setText('Добавлено в лист ожидания');
    setTextStyle('footer__text-active');
    setNameButton('button__absence-active');
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
