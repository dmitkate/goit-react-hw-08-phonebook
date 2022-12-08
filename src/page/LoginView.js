import React,  { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'block',
   margin: '0 auto'
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

return (
  <div style={styles.container}>
    <h1 style={styles.title}>Authorization</h1>
    <form onSubmit={handleSubmit}>
   
       <label>E-mail
        <input type='email' name='email' onChange={handleChange} required></input>
      </label>
       <label>Password
        <input type='password' name='password' onChange={handleChange} required></input>
      </label>
      <button type='submit'>submit</button>
    </form>
  </div>
);
}