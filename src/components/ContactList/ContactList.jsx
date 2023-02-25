import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchContacts, deleteContact } from 'redux/contactsOperations';
import { nanoid } from 'nanoid';
import { AiOutlineDelete, AiFillPhone} from "react-icons/ai";
import { Loader } from '../Loader/Loader';
import { List, Button, Item, Name, Number, Wrapper } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const loading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
  };

  const visibleContacts = filteredContacts(contacts, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <List>
      {loading && <Loader/>}
      {visibleContacts ? (
        visibleContacts.map(contact => (
          <Item key={nanoid()}>
            <Wrapper>
            <img src={contact.userAvatar} alt="" width={40} height={40}/>
            <Name>{contact.name} : </Name>
            </Wrapper>
            <Wrapper>
            <Number> <AiFillPhone/>{contact.number}</Number>
            <Button onClick={() => dispatch(deleteContact(contact.id))}>
              <AiOutlineDelete style={{fill : 'red', width: '16px', height: '20px'}}/>
            </Button>
            </Wrapper>
          
          </Item>
        ))
      ) : (
        <span>та блін</span>
      )}
    </List>
  );
};

