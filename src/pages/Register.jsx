import React, { useEffect } from 'react';
import styles from './register.module.css';
import { registerThunk } from 'redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserData } from 'redux/selectors';

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
    <div className={styles.registerFormContainer}>
      <h2 className={styles.registerFormTitle}>Register form</h2>
      <form onSubmit={handleSubmit} className={styles.myFormInputsWrapper}>
        <label>
          Name:
          <input
            required
            type="text"
            name="userName"
            placeholder="Adrian Cross"
            className={styles.myFormInput}
          />
        </label>
        <label>
          Email:
          <input
            required
            type="email"
            name="userEmail"
            placeholder="across@mail.com"
            className={styles.myFormInput}
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
            className={styles.myFormInput}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Register;
