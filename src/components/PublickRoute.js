import { useUser } from 'hooks/hooks';
import { Navigate } from 'react-router-dom';

export default function PublickRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}