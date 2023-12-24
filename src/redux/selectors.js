export const getContacts = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  return getContacts(state).filter(contact =>
    contact.name.toLowerCase().includes(getFilter(state).toLowerCase())
  );
};
