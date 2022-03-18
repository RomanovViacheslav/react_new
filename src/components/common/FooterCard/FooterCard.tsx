import React from 'react';
import style from './FooterCard.module.scss';

const FooterCard = () => {
  const [count, setCount] = React.useState(0);

  const addHandler = () => {
    setCount(count + 1);
  };

  const removeHandler = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div>
      <p className={style.footer__text}>{count} шт. добавлено</p>
      <button className={style.button__add} type="button" onClick={addHandler}>
        Добавить в корзину
      </button>
      <button className={style.button__remove} type="button" onClick={removeHandler}>
        Удалить из корзины
      </button>
    </div>
  );
};

export default FooterCard;
