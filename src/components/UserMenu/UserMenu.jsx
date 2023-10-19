import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { logoutThunk } from 'redux/thunks';

function UserMenu() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <div>
      <h2>Contacts</h2>
      <p>Hello {userData?.email}!</p>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}

export default UserMenu;
