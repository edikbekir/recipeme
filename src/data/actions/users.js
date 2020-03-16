import { usersService } from '../services/users';

export const usersActions = {
  signup,
  login
}

function signup(params){
  return dispatch => {
    dispatch(request());
    return usersService.signup(params)
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
