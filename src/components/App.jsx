import { Spinner } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useUser } from 'hooks/hooks';

import authOperations from 'redux/auth/auth-operations';
import AppBar from './AppBar';

import PrivateRoute from './PrivateRout';
import PublicRoute from './PublickRoute';

const HomeView = lazy(() => import('page/HomeView'));
const RegisterView = lazy(() => import('page/RegisterView'));
const LoginView = lazy(() => import('page/LoginView'));
const ContactsView = lazy(() => import('page/ContactsView'));
const { NotFound } = lazy(() => import('./NotFaund'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useUser();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  ) : (
    <Box padding={4}>
      <AppBar />
      <Suspense
        fallback={
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      >
        <Routes>
          <Route index element={<HomeView />} />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginView />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsView />} />
            }
          />
          <Route path="*" component={<NotFound />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
