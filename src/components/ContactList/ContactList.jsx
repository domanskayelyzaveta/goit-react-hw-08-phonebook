import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterContacts } from 'redux/selectors';
import { requestDeleteContactThunk } from 'redux/thunks';
import { Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(requestDeleteContactThunk(id));
  };
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={nanoid()}>
            {name} : {number}
            <Button
              id={nanoid(id)}
              className="contactListBtn"
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
