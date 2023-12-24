import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { Loader } from '../Loader/Loader';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error ? (
        <Loader />
      ) : filteredContacts.length === 0 && !error ? (
        <p>The Phonebook is empty. Add your first contact.</p>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </ul>
  );
}
