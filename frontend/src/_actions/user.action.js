import { userService } from '../_services';

export const userAction = {
  loginWithGoogle,
  getAllUser
};

function loginWithGoogle(token, email, name, successCallback){
  return dispatch => {
    userService.loginWithGoogle(token, email, name).then(
      response => {
        console.log('loginWithGoogle action response: ', response);
        if(response.result === 'success'){
          dispatch(success());
          successCallback(response.row.insertId);
        }
      },
      error => {
        console.log('loginWithGoogle action error: ', error);
        dispatch(failure(error));
      }
    )
  };
  function success(user) {
    return { type: 'LOGIN_SUCCESS', user }
  }

  function failure(error) {
    return { type: 'LOGIN_FAIL', error }
  }
}

function getAllUser(){
  return dispatch => {
    userService.getAllUsers().then(
      data => {
        dispatch(success(data));
      },
      error => {
        dispatch(failure(error));
      }
    )
  }

  function success(data) {
    return { type: 'GET_USERS_SUCCESS', data }
  }

  function failure(error) {
    return { type: 'GET_USERS_ERROR', error }
  }
}