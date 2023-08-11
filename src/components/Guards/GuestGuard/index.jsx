import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import { ROLES } from '../../../constants';
import { PATHS } from '../../../router/pathes';

const GuestGuard = ({ children }) => {
  const { role } = useAuthContext();

  if (role === ROLES.ADMIN || role === ROLES.USER)
    return <Navigate to={PATHS.HOME} replace={true} />;

  return children;
};

export default GuestGuard;
