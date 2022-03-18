import React, { Children } from 'react';
import styled from 'styled-components';
import Card from '../../common/Card/Card';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import PageWrapper from '../../common/PageWrapper';
import style from './MainPage.module.scss';

const MainPage: React.FC = ({ children }) => (
  <PageWrapper>
    <main className={style.content}>
      <div className={style.content__container}>
        <h1>Main content</h1>
        <div className={style.card__section}>{children}</div>
      </div>
    </main>
  </PageWrapper>
);

export default MainPage;
