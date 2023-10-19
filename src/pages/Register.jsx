import React, { useEffect } from 'react';
import { registerThunk } from 'redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserData } from 'redux/selectors';
import { Container, Input } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  ///перезапис сторінки реєстр. і перенаправлення на стор.контактів,
  //немає можливості зробити крок назад
  useEffect(() => {
    if (!userData) return;
    navigate('/contacts', { replace: true });
  }, [userData, navigate]);

  ////////////////////////////////////////////////////////////

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
      <h2>Register form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <Input
            required
            type="text"
            name="userName"
            placeholder="Adrian Cross"
          />
        </label>
        <label>
          Email:
          <Input
            required
            type="email"
            name="userEmail"
            placeholder="across@mail.com"
          />
        </label>
        <label>
          Password:
          <Input
            required
            type="password"
            name="userPassword"
            placeholder="examplepwd12345"
            minLength={8}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </Container>
  );
};

export default Register;
