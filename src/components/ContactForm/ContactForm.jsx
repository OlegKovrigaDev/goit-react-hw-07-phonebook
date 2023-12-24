import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import Notiflix from 'notiflix';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleSubmit = e => {
    e.preventDefault();

    const contact = { name: name, number: number };

    const isContactExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExist) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${contact.name} already exists!`,
        'Ok'
      );
      return;
    }

    const isNumberExist = contacts.find(
      ({ number }) =>
        contact.number.replace(/\D/g, '') === number.replace(/\D/g, '')
    );

    if (isNumberExist) {
      Notiflix.Report.warning(
        'Alert',
        `Number ${contact.number} is already in contacts!`,
        'Ok'
      );
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  const handleNameChange = e => setName(e.target.value);

  const handleNumberChange = e => setNumber(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Number:
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};
