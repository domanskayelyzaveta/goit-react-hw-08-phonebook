import React, { useEffect } from 'react';
import styles from './login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/thunks';
import { selectUserData } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (!userData) return;
    navigate('/contacts', { replace: true });
  }, [userData, navigate]);

  const handleSubmit = event => {
    event.preventDefault();

    const children = event.target.elements;
    const email = children.userEmail.value;
    const password = children.userPassword.value;

    dispatch(loginThunk({ email, password }));
    event.currentTarget.reset();
  };

  return (
    <div>
      <div className={styles.myContactsContainer}>
        <h2 className={styles.loginTitle}>Login form</h2>
        <form onSubmit={handleSubmit} className={styles.myLoginInputsWrapper}>
          <label>
            Email:
            <input
              required
              type="email"
              name="userEmail"
              placeholder="across@mail.com"
              className={styles.myLoginInputs}
            />
          </label>
          <label>
            Password:
            <input
              required
              type="password"
              name="userPassword"
              placeholder="examplepwd12345"
              minLength={8}
              className={styles.myLoginInputs}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
