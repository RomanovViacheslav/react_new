import React, { Children, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { data } from '../../../helpers';
import Card from '../../common/Card/Card';

import style from './MainPage.module.scss';
import shugar from '../../../shuga.png';
import FooterCard from '../../common/FooterCard/FooterCard';
import FooterCardAbsence from '../../common/FooterCardAbsence/FooterCardAbsence';

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
        <h1>Main content</h1>
        <div className={style.card__section}>
          {visible ? (
            data.map((el) => (
              <Card
                key={el.id}
                id={el.id}
                title={el.title}
                img={shugar}
                alt="сахар"
                unit={el.wt}
                price={el.price}
                stock={el.stock}
              />
            ))
          ) : (
            <h2>Продукты питания</h2>
          )}
          <button type="button" onClick={handler}>
            открыть
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
