import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { ClearUserNameAction } from '../../../store/actions';
import { GetUserName } from '../../../store/selector';
import FormButton from '../Form/FormButton/FormButton';
import style from './Header.module.scss';
import logo from './logo.png';

const Header = () => {
  const name = useSelector(GetUserName);
  const dispatch = useDispatch();
  return (
    <header className={style.header}>
      <div className={style.container}>
        <NavLink to="/">
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
        <ul>
          <li>
            <NavLink className={style.header__link} to="/">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink className={style.header__link} to="/products">
              Products
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
        <div className={style.user__name}>
          {name ? (
            <div className={style.user__name_login}>
              <p>{name}</p>
              <FormButton text="LOG OUT" onClick={() => dispatch(ClearUserNameAction())} />
            </div>
          ) : (
            'NO_AUTH'
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
