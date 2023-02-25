import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { toast } from 'react-hot-toast';
import { AiOutlineUserAdd} from "react-icons/ai";

import { ContactsForm, Title, Button, NameInput, NumberInput } from './Form.styled';


export const ContactForm = function () {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const existingContact = contacts.find(
      contact => contact.name === name && contact.number === number
    );

    if (existingContact) {
      toast.error(
        `Uuum, the contact with name ${name} and phone number ${number} is already in the list`
      );
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name: name,
        number: number,
        userAvatar : `https://api.dicebear.com/5.x/adventurer/svg?seed=${name}`,
      })
    );
    
    form.reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <Title>Add new contact :</Title>
      <label>
        Name :
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Nataliia"
        />
      </label>

      <label>
        Number :
        <NumberInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+380XXXXXXXXX"
        />
      </label>
      <Button type="submit"><AiOutlineUserAdd style={{width: '20px', height: '20px'}}/>Add contact</Button>
    </ContactsForm>
  );
};
