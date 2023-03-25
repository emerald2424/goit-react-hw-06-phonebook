import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';


export const App = () => {
  const contacts = useSelector(getContacts);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>

      <h2>Contacts</h2>
      <Filter ></Filter>
      <ContactList></ContactList>

      <GlobalStyle></GlobalStyle>
    </Layout>
  );
};
