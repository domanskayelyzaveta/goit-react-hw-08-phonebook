import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { Header } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<div>{<Loader />}</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
