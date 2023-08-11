import React, { useContext } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = React.createContext(null);
export const AuthProvider = ({ children }) => {
  const data = useAuth();
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
