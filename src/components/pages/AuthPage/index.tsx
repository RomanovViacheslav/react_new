import React, { Children } from 'react';
import Footer from '../../common/Footer';
import Form from '../../common/Form/Form';
import FormButton from '../../common/FormButton/FormButton';
import Header from '../../common/Header';

import PageWrapper from '../../common/PageWrapper';
import style from './AuthPage.module.scss';

const AuthPage: React.FC = ({ children }) => (
  <PageWrapper>
    <main className={style.content}>
      <div className={style.content__container}>{children}</div>
    </main>
  </PageWrapper>
);

export default AuthPage;
