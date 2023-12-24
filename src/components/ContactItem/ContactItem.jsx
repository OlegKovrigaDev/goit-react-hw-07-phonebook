import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/operations';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li>
      {contact.name} : {contact.number}
      <button onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
