import { ListItem } from "./ContactListItem.styled";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/contactsSlice";


export const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();

  return (
    <ListItem key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }),
}