import { usersService } from '../services/users';

export const usersActions = {
  signup,
  login
}

function signup(params){
  return dispatch => {
    dispatch(request());
    const { email, password, firstName: first_name, lastName: last_name } = params;
    const requestParams = { email, password, first_name, last_name };
    return usersService.signup(requestParams)
    .then( response => {
      dispatch(login(params));
      dispatch(success(response));
    })
    .catch( error => {
      dispatch(failure(error));
    })
  }
  function request(){ return { type: 'REGISTER_USER_REQUEST' } }
  function success(payload){ return { type: 'REGISTER_USER_SUCCESS', payload } }
  function failure(payload){ return { type: 'REGISTER_USER_FAILURE', payload } }
}

function login(params){
  return dispatch => {
    dispatch(request());
    return usersService.login(params)
    .then( response => {
      localStorage.setItem('authenticated', true);
      dispatch(success(response));
    })
    .catch( error => {
      dispatch(failure(JSON.parse(error.message)));
    });
  };
  function request(){ return { type: 'LOGIN_USER_REQUEST' } }
  function success(payload){ return { type: 'LOGIN_USER_SUCCESS', payload } }
  function failure(payload){ return { type: 'LOGIN_USER_FAILURE', payload } }
};
