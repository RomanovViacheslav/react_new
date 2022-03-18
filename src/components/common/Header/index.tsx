import React from 'react';
import style from './Header.module.scss';
import logo from './logo.png';

const Header = () => (
  <header className={style.header}>
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="logo" />
    </div>
  </header>
);

export default Header;
