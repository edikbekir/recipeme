import { usersConstants } from '../constants/users';

const initialState = {
  loading: false,
  currentUser: {},
  loggedIn: false,
  token: {},
  error: null,
  signupSucces: false,
  signupError: false
};

export function users(state = initialState, action={}) {
  const { type, payload } = action;

  switch (type) {
    case usersConstants.REGISTER_USER_REQUEST:
      return { ...state, loading: true };
    case usersConstants.REGISTER_USER_SUCCESS:
      return { ...state, signupSucces: true, loading: false };
    case usersConstants.REGISTER_USER_FAILURE:
      return { ...state, signupSucces: false, signupError: false, loading: false, error: payload };

    case usersConstants.LOGIN_USER_REQUEST:
      return { ...state, loading: true};
    case usersConstants.LOGIN_USER_SUCCESS:
      return { ...state, currentUser: payload.user, token: payload.token, loggedIn: true, loading: false };
    case usersConstants.LOGIN_USER_FAILURE:
      return { ...state, loading: false, error: payload, token: {}, currentUser: {} };

    default:
      return state;
  }
}
