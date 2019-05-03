import { checkLocalStorage, getUserCurrent } from '../_helpers';

export function users(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        loggedIn: true});

    case 'GET_USERS_SUCCESS':
        return Object.assign({}, state, {
          dataUsers: action.data
        })

    default:
      return state
  }
}