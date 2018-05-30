import {
  SECURITY_AUTHENTICATED,
  SECURITY_UNAUTHENTICATED,
  SECURITY_AUTHENTICATION_ERROR } from '../actions/types'

const authenticateReducer = (state={}, action) => {
  switch(action.type) {
    case SECURITY_AUTHENTICATED:
      return { ...state, authenticated: true };
    case SECURITY_UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case SECURITY_AUTHENTICATION_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}

export default authenticateReducer;
