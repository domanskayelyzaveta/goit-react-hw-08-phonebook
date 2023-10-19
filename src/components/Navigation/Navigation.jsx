import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/selectors';
import styles from '../Layout/navbar.module.css';

const Navigation = () => {
  const token = useSelector(selectToken);
  return token ? (
    <UserMenu />
  ) : (
    <ul className={styles.myNavbar}>
      <li className={styles.myNavLink}>
        <NavLink className={styles.myLogin} to="/login">
          Login
        </NavLink>
      </li>
      <li className={styles.myNavLink}>
        <NavLink className={styles.myRegister} to="/register">
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
