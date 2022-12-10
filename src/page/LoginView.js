import { Input, InputGroup, Button, InputRightElement, FormControl } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Heading } from '@chakra-ui/react';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'block',
   margin: '15px 30px'
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
export default function AuthorizationView(){
  
  const dispatch = useDispatch();
 
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  
const handleChange = ({ target: { name, value } }) => {
  switch (name) {
  
     case 'email':
      return setEmail(value);
     case 'password':
      return setPassword(value);
    default:
      return;     
  }
}

const handleSubmit = e => {
  e.preventDefault();
  dispatch(authOperations.logIn({ email, password }));
  
  setEmail('');
  setPassword('');
}
  const [show, setShow] = React.useState(false)
  const showPassword = () => setShow(!show)
return (
  <div style={styles.container}>
   
    <Heading textAlign='center' as='h2' size='xl' color='#1B3F34'>SING IN</Heading>
    <form onSubmit={handleSubmit}>
      <FormControl   margin="0 auto" textAlign='center' maxW='480px'>
      <Input
        id="login_email"
        type='email'
        name='email'
        value={email}
        placeholder='Enter E-mail'
        onChange={handleChange}
        variant='flushed'
        required
      />
    
      <InputGroup size='md'>
        <Input
          id="login_password"
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          name='password'
          value={password}
          onChange={handleChange}
          placeholder='Enter password'
          variant='flushed'
          required
      />
      <InputRightElement>
        <Button bg='transparent' h='1.75rem' size='sm' onClick={showPassword}>
          {show ? <ViewOffIcon/> : <ViewIcon/>}
        </Button>
        </InputRightElement>
        </InputGroup>        
      <Button mt='15px' colorScheme='teal' size='md' type='submit'>SUBMIT</Button> 
    </FormControl>
    </form>
    
  </div>
);
}