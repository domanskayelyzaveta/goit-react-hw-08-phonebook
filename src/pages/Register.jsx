import React, { useEffect } from 'react';
import { registerThunk } from 'redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserData } from 'redux/selectors';
import { Container, Title } from './Register.styled';
import { Button, TextField } from '@mui/material';
import styles from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  // /перезапис сторінки реєстр. і перенаправлення на стор.контактів,
  // немає можливості зробити крок назад
  useEffect(() => {
    if (!userData) return;
    navigate('/contacts', { replace: true });
  }, [userData, navigate]);

  //////////////////////////////////////////////////////////

  const handleSubmit = event => {
    event.preventDefault();

    const children = event.target.elements;
    const name = children.userName.value;
    const email = children.userEmail.value;
    const password = children.userPassword.value;

    dispatch(registerThunk({ name, email, password }));
  };

  return (
    <Container>
      <Title>Register form</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            required
            type="text"
            name="userName"
            label="Name:"
            color="success"
            placeholder="Adrian Cross"
            className={styles.myRegisterInput}
          />
          <TextField
            required
            type="email"
            label=" Email:"
            color="success"
            name="userEmail"
            placeholder="across@mail.com"
            className={styles.myRegisterInput}
          />
          <TextField
            required
            minLength={8}
            color="success"
            type="password"
            label="Password:"
            name="userPassword"
            placeholder="examplepwd12345"
            className={styles.myRegisterInput}
          />

          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            className={styles.myRegisterBtn}
          >
            Sign up
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Register;
