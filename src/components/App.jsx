// import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage';
import { selectUserData } from 'redux/selectors';
import { currentUserThunk } from 'redux/thunks';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export function App() {
  const userData = useSelector(selectUserData);
  console.log(userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route path="/" element={<Navigate to={'/contacts'} />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
