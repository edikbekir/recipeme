import config from '../../config/config';

export const usersService = {
  login,
  signup
}

function signup(params){
  const url = `${config.api}/api/users`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(params)
  };

  return fetch(url, options)
  .then( response => {
    return response.json();
  })
  .then(res => {
    if(res.error){
      throw new Error({ error: res.error })
    }
  })
}

function login(params){
  const url = `${config.api}/api/users/sign_in`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(params)
  }

  return fetch(url, options)
  .then(response => {
    return response.json();
  })
  .then(response => {
    if(response.error){
      throw new Error(JSON.stringify(response.error));
    }
    return response;
  })}
