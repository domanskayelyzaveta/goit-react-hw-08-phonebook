import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { onFilterChange } from 'redux/phoneBookReducer';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { selectUserData } from 'redux/selectors';
import { requestPhoneBookThunk } from 'redux/thunks';

const Contacts = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (!userData) return;
    dispatch(requestPhoneBookThunk());
  }, [dispatch, userData]);

  return (
    <div>
      <ContactsForm />
      <Filter label="Name" type="text" />
      <ContactList />
    </div>
  );
};

export default Contacts;
