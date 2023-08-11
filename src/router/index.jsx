import { useRoutes } from 'react-router-dom';
import { routes } from './router';
import { useAuthContext } from '../context/AuthContext';

const Router = () => {
  const { role } = useAuthContext();
  const router = useRoutes(routes(role));

  return router;
};

export default Router;
