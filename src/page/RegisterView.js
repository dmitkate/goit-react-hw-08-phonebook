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

return (
  <div style={styles.container}>
    <h1 style={styles.title}>Registration</h1>
    <form onSubmit={handleSubmit}>
      <label>Name
        <input type='text' name='name' value={name} onChange={handleChange}></input>
      </label>
       <label>E-mail
        <input type='email' name='email' value={email} onChange={handleChange}></input>
      </label>
       <label>Password
        <input type='password' name='password' value={password} onChange={handleChange}></input>
      </label>
      <button type='submit'>submit</button>
    </form>
  </div>
);
}
