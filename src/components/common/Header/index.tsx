import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from './Header.module.scss';
import logo from './logo.png';

const Header = () => (
  <header className={style.header}>
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="logo" />
      <ul>
        <li>
          <NavLink className={style.header__link} to="/">
            Main
          </NavLink>
        </li>
        <li>
          <NavLink className={style.header__link} to="/products">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink className={style.header__link} to="/auth">
            Auth
          </NavLink>
        </li>
        <li>
          <NavLink className={style.header__link} to="/reg">
            Reg
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
