import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import { ROLES } from '../../../constants';
import { PATHS } from '../../../router/pathes';

const AdminGuard = ({ children }) => {
  const { role } = useAuthContext();

  if (role === ROLES.USER || role === ROLES.GUEST)
    return <Navigate to={PATHS.HOME} replace={true} />;

  return children;
};

export default AdminGuard;
