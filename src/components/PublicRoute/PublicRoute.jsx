import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import {
  // selectIsSignedIn,
  selectToken,
} from 'redux/selectors';

const PublicRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(selectToken);
  //   const isSignedIn = useSelector(selectIsSignedIn);
  //   return isSignedIn ? <Navigate to={redirectTo} /> : children;
  return !token ? <Outlet /> : <Navigate to="/contacts" />;
};

export default PublicRoute;
