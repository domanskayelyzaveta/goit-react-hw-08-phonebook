import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './ContactsForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function ContactsForm(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <div className="contact-wrapper">
      <form onSubmit={handleSubmit}>
        <label className="title">Name</label>
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          required
          id={nanoid()}
          placeholder="Ivan"
          value={name}
          onChange={handleChange}
        />
        <label className="title">phone</label>
        <input
          className="form-control mb-3"
          type="phone"
          name="phone"
          required
          placeholder="000-00-00"
          value={phone}
          onChange={handleChange}
        />
        <button className="addContactBtn" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
