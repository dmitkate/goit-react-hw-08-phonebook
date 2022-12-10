
import { Button, Text, Avatar, UnorderedList, ListItem, Flex} from '@chakra-ui/react';
import { useDispatch, useSelector} from 'react-redux';
import { deleteContacts } from 'redux/contacts/operation';
import { selectFilterContacts } from 'redux/contacts/selectors';
export function ContactList() {
  
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);  
  const handleDalete = ({ id }) => dispatch(deleteContacts( id ));
  return (
   
      <UnorderedList m='0 auto' maxW='550px'>
        {contacts.map(({id,name,number}) => (
          <ListItem display='flex' alignItems='center' justifyContent="space-between" key={id}>
            
            <Flex alignItems='center'><Avatar m='10px' bg='teal' name={name} src='https://bit.ly/broken-link' />
            <Text  fontSize='24px'>{name}: {number}</Text></Flex>    
            
            <Button             
              type="button"
              onClick={() => handleDalete({id})}>
              Delete
            </Button>
          </ListItem>
        ))}
      </UnorderedList>
   
  );
}
