import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';
import { requestDeleteContactThunk } from 'redux/thunks';
// import { Button } from './ContactList.styled';
import { Container, List, ListWrapper } from './ContactList.styled';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(requestDeleteContactThunk(id));
  };
  return (
    <Container>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ListWrapper>
            <div>
              <IconButton
                id={nanoid(id)}
                size="small"
                onClick={() => onDelete(id)}
                aria-label="delete"
                style={{ color: `#a04f6d` }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
            <div>
              <List key={nanoid()}>
                {name} : {number}
              </List>
            </div>
          </ListWrapper>
        ))}
      </ul>
    </Container>
  );
};
