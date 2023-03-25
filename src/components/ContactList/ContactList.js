import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const ContactList = ({ onDelete }) => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  
  const filterContacts = () => {
    const searchedName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchedName)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem
          contact={contact}
          key={contact.id}
        ></ContactListItem>
      ))}
    </List>
  );
} 

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })),
  onDelete: PropTypes.func
}