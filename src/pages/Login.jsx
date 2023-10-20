import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/thunks';
import { selectUserData } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';
// import { LoginForm } from './Login.styled';
import { Button, TextField } from '@mui/material';
import { Container, Title } from './Register.styled';
// import { Input } from '@mui/material';
import styles from './Login.module.css';
import { LoginForm } from './Login.styled';

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
      <Container>
        <Title>Login form</Title>
        <LoginForm onSubmit={handleSubmit}>
          <div className={styles.myInputWrapper}>
            <TextField
              type="email"
              label="Email:"
              name="userEmail"
              color="success"
              placeholder="across@mail.com"
              className={styles.myLoginInput}
              required
            />
            <TextField
              type="password"
              label="Password:"
              name="userPassword"
              placeholder="examplepwd12345"
              color="success"
              minLength={8}
              className={styles.myLoginInput}
              required
            />
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              className={styles.myLoginBtn}
            >
              Login
            </Button>
          </div>
        </LoginForm>
      </Container>
    </div>
  );
};

export default Login;
