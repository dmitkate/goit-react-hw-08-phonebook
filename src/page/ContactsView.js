import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from 'components/Contact';
import Find from 'components/Filter';
import { FormIn } from 'components/Formin';
import { fetchContacts } from '../redux/contacts/operation';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';

import { Spinner } from '@chakra-ui/react';
function ContactsView() {

    const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (<>
    <FormIn />

    <Find />
    {isLoading && <Spinner
  
    thickness='4px'
    peed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
/>}
    {isError && <b>{isError}</b>}
    <ContactList />
  </>
  )

};

export default ContactsView ;