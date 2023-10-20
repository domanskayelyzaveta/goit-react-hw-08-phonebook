import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { requestAddContactThunk } from 'redux/thunks';
import { selectContacts } from 'redux/selectors';
import {
  ContactForm,
  Container,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  TitleForm,
} from './ContactForm.styled';
import { Button } from '@mui/material';
import styles from './ContactForm.module.css';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formatPhoneNumber = event => {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');

    if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
    }

    input.value = value;
  };

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    if (
      contacts.some(
        contact => contact.name === name && contact.number === number
      )
    ) {
      alert(`"${name}" is already in contacts!`);
    } else {
      dispatch(requestAddContactThunk({ name, number }));
      event.currentTarget.reset();
    }
  };

  return (
    <Container>
      <ContactForm onSubmit={handleSubmit}>
        <TitleForm>Contacts</TitleForm>
        <InputWrapper>
          <InputContainer>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              required
              id={nanoid()}
              placeholder="Ivan"
            />
          </InputContainer>
          <InputContainer>
            <Label>Number</Label>
            <Input
              type="tel"
              name="number"
              required
              placeholder="000-00-00"
              onInput={formatPhoneNumber}
            />
          </InputContainer>
          <Button
            variant="outlined"
            type="submit"
            color="secondary"
            className={styles.myAddContactBtn}
          >
            Add contact
          </Button>
        </InputWrapper>
      </ContactForm>
    </Container>
  );
};

export default ContactsForm;
