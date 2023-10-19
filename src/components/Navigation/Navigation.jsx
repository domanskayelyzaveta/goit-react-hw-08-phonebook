import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/selectors';
import styles from './Navigation.module.css';
import { List, ListEl } from './Navigation.styled';

const Navigation = () => {
  const token = useSelector(selectToken);
  return token ? (
    <UserMenu />
  ) : (
    <List>
      <ListEl>
        <NavLink className={styles.myNavLink} to="/login">
          Login
        </NavLink>
      </ListEl>
      <ListEl>
        <NavLink className={styles.myNavLink} to="/register">
          Register
        </NavLink>
      </ListEl>
    </List>
  );
};

export default Navigation;
