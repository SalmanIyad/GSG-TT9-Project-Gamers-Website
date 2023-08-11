import { useReducer } from 'react';
import { ROLES } from '../constants';
import { auth_reducer } from '../reducer/AuthReducer';
import { AUTH_ACTIONS } from '../constants/AuthActions';
import axios from 'axios';
import { AUTH_API } from '../config/api';
import { AUTH_API_ENDPOINT } from '../router/pathes';

const initialState = {
  isAuth: false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  role: localStorage.getItem('role') || ROLES.GUEST,
  error: null,
  isLoading: false,
};

const useAuth = () => {
  const [state, dispatch] = useReducer(auth_reducer, initialState);
  const token = state.token || localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const login = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(
        AUTH_API + AUTH_API_ENDPOINT.LOGIN,
        body
      );
      console.log(data);
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: { user: data } });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const signup = async (body) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.post(
        AUTH_API + AUTH_API_ENDPOINT.SIGNUP,
        body
      );
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: { user: data } });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  };

  const getProfileData = async () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING });
    try {
      const { data } = await axios.get(
        AUTH_API + AUTH_API_ENDPOINT.PROFILE,
        config
      );
      dispatch({ type: AUTH_ACTIONS.AUTHORIZE, payload: { user: data } });
    } catch (error) {
      dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
    }
  };
  return {
    ...state,
    login,
    signup,
    logout,
    getProfileData,
  };
};

export default useAuth;
