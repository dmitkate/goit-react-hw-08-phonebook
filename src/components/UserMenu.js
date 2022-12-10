import {
  Button,

  Avatar,

} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import {getUsername} from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
   badge: {
    bg: 'gray.500',
    border: '2px solid',
  },
  containerAvatar: {
    borderRadius: 'xl',
  },
  excessLabel: {
    bg: 'gray.800',
    color: 'white',
    borderRadius: 'xl',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);


  return (
  <div style={styles.container}>
   <Avatar m='5px' bg='teal' name={name} src='https://bit.ly/broken-link' />
      <span style={styles.name}>Welcome, {name} </span> 
       <Button type="button" onClick={() => dispatch(authOperations.logOut())}>  
      LOGOUT
      </Button>
    </div>
  );
}