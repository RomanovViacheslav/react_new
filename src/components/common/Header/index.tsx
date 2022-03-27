import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import logo from './logo.png';

const Header = () => (
  <header className={style.header}>
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="logo" />
      <ul>
        <li>
          <Link className={style.header__link} to="/">
            Main
          </Link>
        </li>
        <li>
          <Link className={style.header__link} to="/auth">
            Auth
          </Link>
        </li>
        <li>
          <Link className={style.header__link} to="/reg">
            Reg
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
