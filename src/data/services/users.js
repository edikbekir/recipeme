import config from '../../config/config';

export const usersService = {
  login,
  signup
}

function signup(params){
  const url = `${config.api}/api/v1/users/signup`;
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
  const url = new URL(`${config.api}/api/v1/sessions/login`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
  };

  return fetch(url, options)
  .then(response => {
    return response
  })
  .then(response => {
    debugger
    if(response.error){
      throw new Error(JSON.stringify(response.error));
    }
    return response;
  })}
