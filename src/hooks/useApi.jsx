import { useReducer } from 'react';
import users_reducer from '../reducer/UsersReduser';
import { USERS_ACTIONS } from '../constants/UsersActions';
import axios from 'axios';
import { AUTH_API } from '../config/api';
import { AUTH_API_ENDPOINT } from '../router/pathes';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};
const UseApi = (url, config) => {
  const [state, dispatch] = useReducer(users_reducer, initialState);

  const getUsers = async () => {
    dispatch({ type: USERS_ACTIONS.REQUEST_START });
    try {
      const { data } = await axios.get(url, config);
      dispatch({ type: USERS_ACTIONS.REQUEST_SUCCESS_GET, payload: data });
    } catch (error) {
      dispatch({ type: USERS_ACTIONS.REQUEST_FAILURE, payload: error.message });
    }
  };
  const deleteUser = async (id) => {
    dispatch({ type: USERS_ACTIONS.REQUEST_START });
    try {
      await axios.delete(
        AUTH_API + AUTH_API_ENDPOINT.DELETE_USER.replace(':id', id),
        config
      );
      dispatch({ type: USERS_ACTIONS.REQUEST_SUCCESS_DELETE, payload: id });
      console.log('success');
    } catch (error) {
      dispatch({ type: USERS_ACTIONS.REQUEST_FAILURE, payload: error.message });
      console.log(error.message);
    }
  };
  return {
    ...state,
    getUsers,
    deleteUser,
  };
};
export default UseApi;
