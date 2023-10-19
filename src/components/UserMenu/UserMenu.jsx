import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { logoutThunk } from 'redux/thunks';
import { Button } from './UserMenu.styled';

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
      <Button onClick={handleLogOut}>Log out</Button>
    </div>
  );
}

export default UserMenu;
