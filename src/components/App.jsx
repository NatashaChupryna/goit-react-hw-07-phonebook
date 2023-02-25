// import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { StyledApp, Title } from './App.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <StyledApp>
      <Title>Phonebook</Title>

      <ContactForm></ContactForm>

      <Title>Contacts</Title>

      <Filter></Filter>

      <ContactList></ContactList>

      <Toaster />
    </StyledApp>
  );
};
