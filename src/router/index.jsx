import { useRoutes } from 'react-router-dom';
import { routes } from './router';

const Router = () => {
  const router = useRoutes(routes);

  return router;
};

export default Router;
