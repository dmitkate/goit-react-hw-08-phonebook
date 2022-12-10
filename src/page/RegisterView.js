import React,  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import { Input, InputGroup, Button ,InputRightElement, FormControl} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import authOperations from 'redux/auth/auth-operations';
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
export default function RegisterView(){
  
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  
const handleChange = ({ target: { name, value } }) => {
  switch (name) {
    case 'name':
      return setName(value);
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
  dispatch(authOperations.register({ name, email, password }));
  
  setName('');
  setEmail('');
  setPassword('');
}
  const [show, setShow] = React.useState(false)
  const showPassword = () => setShow(!show)

return (
  <div style={styles.container}>
    <Heading textAlign='center' as='h2' size='xl' color='#1B3F34'>SING UP</Heading>
   
    <form onSubmit={handleSubmit}>
    <FormControl  margin="0 auto" textAlign='center' maxW='480px'>
      
      <Input
        id="register_name"
        type='text'
        name='name'
        value={name}
        placeholder='Enter Name'
        onChange={handleChange}
        variant='flushed'/>
       
      <Input
        id="register_email"
        type='email'
        name='email'
        value={email}
        placeholder='Enter E-mail'
        onChange={handleChange}
        variant='flushed'/>
    
      <InputGroup size='md'>
      <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          name='password'
          value={password}
          onChange={handleChange}
            placeholder='Enter password'
            variant='flushed'
      />
      <InputRightElement maxW="360px">
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
