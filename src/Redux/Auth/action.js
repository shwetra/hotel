import axios from "axios";
import * as types from './actionTypes';

const userAuthentication = (payload) => {
  return (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST });
    axios.post('https://babu.onrender.com/auth', payload)
      .then((response) => {
        dispatch({ type: types.USER_LOGIN_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: types.USER_LOGIN_FAILURE, payload: error });
      });
  };
};

const userSignout = () => {
  return (dispatch) => {
    // Clear authentication data from localStorage
    localStorage.removeItem('isAuth');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('token');

    dispatch({ type: types.USER_SIGNOUT_SUCCESS });
  };
};


export { userAuthentication, userSignout };
