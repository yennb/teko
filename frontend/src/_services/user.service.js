export const userService = {
  loginWithGoogle,
  getAllUsers
}

function loginWithGoogle(token, email, name){
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'token': token,
      'email': email,
      'name': name
    })
  };

  return fetch(process.env.REACT_APP_DOMAIN_API + '/api/login-google', requestOptions)
    .then(response => {
      console.log('loginWithGoogle service: ', response);
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })
}

function getAllUsers(){
  const requestOptions = {
    method: 'GET'
  };
  
  return fetch(process.env.REACT_APP_DOMAIN_API + '/users', requestOptions).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText)
    }
    return response.json()
  })
}