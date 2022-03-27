import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { data } from '../../../helpers';
import Card from '../../common/Card/Card';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import PageWrapper from '../../common/PageWrapper';
import style from './MainPage.module.scss';
import shugar from '../../../shuga.png';

const MainPage: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible((prev) => !prev);
  };

  return (
    <PageWrapper>
      <main className={style.content}>
        <div className={style.content__container}>
          <h1>Main content</h1>
          <div className={style.card__section}>
            {visible ? (
              data.map((el) => (
                <Card
                  key={el.id}
                  title={el.name}
                  img={shugar}
                  alt="сахар"
                  unit={el.wt}
                  price={el.price}
                />
              ))
            ) : (
              <h2>список скрыт</h2>
            )}
            <button type="button" onClick={handler}>
              ffff
            </button>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default MainPage;
