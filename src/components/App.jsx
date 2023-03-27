import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


export const App = () => {
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
