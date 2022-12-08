import { useDispatch, useSelector} from 'react-redux';
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
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);


  return (
    <div style={styles.container}>

      <span style={styles.name}>Добро пожаловать, {name} </span> 
       <button type="button" onClick={() => dispatch(authOperations.logOut())}>  
      log out
      </button>
    </div>
  );
}