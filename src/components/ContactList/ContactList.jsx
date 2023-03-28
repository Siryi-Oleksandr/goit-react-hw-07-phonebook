import ContactItem from 'components/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

export default ContactList;
