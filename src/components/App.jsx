import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { addContact, setFilter } from 'redux/actions';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = contact => {
    const names = contacts.map(contact => contact.name.toLowerCase());
    if (names.includes(contact.name.toLowerCase())) {
      return alert(`${contact.name} is already in contacts`);
    }

    dispatch(addContact(contact));
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}></ContactForm>

      <h2>Contacts</h2>
      <Filter onSearch={e => dispatch(setFilter(e.target.value))}></Filter>
      <ContactList></ContactList>

      <GlobalStyle></GlobalStyle>
    </Layout>
  );
};
