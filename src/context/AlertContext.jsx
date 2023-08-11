import React, { useContext, useState } from 'react';
import UseApi from '../hooks/useApi';
import { AUTH_API } from '../config/api';

const AlertContext = React.createContext(null);
export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);

  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const { deleteUser } = UseApi(AUTH_API, config);

  const handleDeleteClick = () => {
    setShowAlert(true);
  };

  const handleCancel = () => {
    setShowAlert(false);
  };

  const handleConfirm = (id) => {
    deleteUser(id);
    setShowAlert(false);
  };

  return (
    <AlertContext.Provider
      value={{ showAlert, handleDeleteClick, handleCancel, handleConfirm }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
