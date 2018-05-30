import axios from 'axios';

import {
  SECURITY_AUTHENTICATED,
  SECURITY_AUTHENTICATION_ERROR } from './types'

const URL = process.env.REACT_APP_API_URL;

const authenticateAction = ({ username, password }, history) => {
  console.log(username, password, history);

  return async (dispatch) => {
    try {
      const res = await axios.post(`${URL}/user/authentication`, {
        email: username,
        password
      });

      dispatch({ type: SECURITY_AUTHENTICATED });
      localStorage.setItem('user', res.data.user);
      localStorage.setItem('token', res.data.token);
      history.push('/');
    } catch(error) {
      dispatch({
        type: SECURITY_AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}

export default authenticateAction;
