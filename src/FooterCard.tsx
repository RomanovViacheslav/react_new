import React from 'react';

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
      <p className="footer__text">{count} шт. добавлено</p>
      <button className="button__add" type="button" onClick={addHandler}>
        Добавить в корзину
      </button>
      <button className="button__remove" type="button" onClick={removeHandler}>
        Удалить из корзины
      </button>
    </div>
  );
};

export default FooterCard;
