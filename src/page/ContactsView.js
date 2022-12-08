import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from 'components/Contact';
import Find from 'components/Filter';
import { FormIn } from 'components/Formin';
import { fetchContacts } from '../redux/contacts/operation';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';
function ContactsView() {

    const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (<>
    <FormIn />
    <h2>Contacts:</h2>
    <Find />
    {isLoading && <b>Loading tasks...</b>}
    {isError && <b>{isError}</b>}
    <ContactList />
  </>
  )

};

export default ContactsView ;