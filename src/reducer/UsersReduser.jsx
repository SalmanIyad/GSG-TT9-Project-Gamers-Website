import { USERS_ACTIONS } from '../constants/UsersActions';

const users_reducer = (state, action) => {
  switch (action.type) {
    case USERS_ACTIONS.REQUEST_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case USERS_ACTIONS.REQUEST_SUCCESS_GET: {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    }

    case USERS_ACTIONS.REQUEST_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    case USERS_ACTIONS.REQUEST_SUCCESS_DELETE:
      return {
        ...state,
        isLoading: false,
        users: {
          ...state.users,
          users:
            action.payload &&
            state.users?.users?.filter((user) => user._id !== action.payload),
        },
        message: 'Success!',
      };

    default:
      return state;
  }
};

export default users_reducer;
