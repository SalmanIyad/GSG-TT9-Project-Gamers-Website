import { Navigate } from 'react-router-dom';
import { PATHS } from './pathes';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import GamesPage from '../pages/GamesPage';
import ProfilePage from '../pages/ProfilePage';
import UsersPage from '../pages/UsersPage';
import GamesOutlet from '../components/GamesOutlet';
import GuestGuard from '../components/Guards/GuestGuard';
import UserGuard from '../components/Guards/UserGaurd';
import AdminGuard from '../components/Guards/AdminGuard';
import NotFound from '../pages/NotFound';

export const routes = (role) => [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignupPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.HOME,
    element: (
      <UserGuard>
        <GamesPage />
      </UserGuard>
    ),
    children: [
      {
        index: true,
        element: <GamesOutlet />,
      },
      {
        path: PATHS.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: PATHS.USERS,
        element: (
          <AdminGuard>
            <UsersPage />
          </AdminGuard>
        ),
      },
    ],
  },
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];
