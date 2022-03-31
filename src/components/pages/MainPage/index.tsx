import React, { Children, useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { data } from '../../../helpers';
import Card from '../../common/Card/Card';

import style from './MainPage.module.scss';
import shugar from '../../../shuga.png';
import FormButton from '../../common/Form/FormButton/FormButton';

const MainPage = () => {
  const { state } = useLocation() as { state: { isOpen: boolean } };

  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    if (state?.isOpen) {
      setVisible(true);
    }
  }, [state?.isOpen]);

  return (
    <main className={style.content}>
      <div className={style.content__container}>
        <h1>Каталог</h1>
        <div>
          <div className={style.card__section}>
            {visible ? (
              data.map((el) => (
                <Card
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  img={el.img}
                  alt="сахар"
                  unit={el.wt}
                  price={el.price}
                  stock={el.stock}
                />
              ))
            ) : (
              <h2 className={style.card__section_text}>Продукты питания</h2>
            )}
          </div>
          <FormButton text={visible ? 'Скрыть список' : 'Показать список'} onClick={handler} />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
