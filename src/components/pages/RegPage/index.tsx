import React, { Children } from 'react';

import PageWrapper from '../../common/PageWrapper';
import style from './RegPage.module.scss';

const RegPage: React.FC = ({ children }) => (
  <PageWrapper>
    <main className={style.content}>
      <div className={style.content__container}>{children}</div>
    </main>
  </PageWrapper>
);

export default RegPage;
