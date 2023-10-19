import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/thunks';
import { selectUserData } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';
import { Container, Input } from './Login.styled';

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
        <h2>Login form</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
