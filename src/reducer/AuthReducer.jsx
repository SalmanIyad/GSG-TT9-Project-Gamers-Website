import { ROLES } from '../constants';
import { AUTH_ACTIONS } from '../constants/AuthActions';

export const auth_reducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_ACTIONS.AUTHORIZE:
      const token = action?.payload?.user?.token || state?.token;
      const role = action?.payload?.user?.isAdmin ? ROLES.ADMIN : ROLES.USER;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(action.payload.user));

      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: token,
        role: role,
        error: null,
        isLoading: false,
      };

    case AUTH_ACTIONS.LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('user');
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
        role: ROLES.GUEST,
        error: null,
        isLoading: false,
      };

    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
