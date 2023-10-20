import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';
import { logoutThunk } from 'redux/thunks';
import { Container } from './UserMenu.styled';
import { Title } from './UserMenu.styled';
import { Button } from '@mui/material';

function UserMenu() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <Container>
      <div>
        <Title>Contacts</Title>
      </div>
      <p>Hello {userData?.name}!</p>
      <div>
        <Button
          onClick={handleLogOut}
          color="secondary"
          style={{ marginRight: '30px' }}
        >
          Log out
        </Button>
      </div>
    </Container>
  );
}

export default UserMenu;
