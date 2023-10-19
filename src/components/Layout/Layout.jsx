import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styles from './navbar.module.css';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <div>
      <header className={styles.myNavContainer}>
        <Navigation />
      </header>
      <Suspense fallback={<div>{<Loader />}</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
