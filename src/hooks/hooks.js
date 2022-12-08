import { useSelector } from 'react-redux';
import {getIsLoggedIn, selectIsRefreshing, selectUser} from 'redux/auth/auth-selectors';

export function useUser() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return { user, isLoggedIn, isRefreshing };
}