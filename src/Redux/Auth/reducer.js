// reducer.js

import * as types from "./actionTypes";
import { saveData } from "../../Utils/appLocalStorage";

const initialState = {
  isAuth: localStorage.getItem('isAuth') === 'true' || false,
  isAdmin: localStorage.getItem('isAdmin') === 'true' || false,
  token: localStorage.getItem('token') || '',
  isLoading: false,
  isError: false,
};

const reducer = (oldstate = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return { ...oldstate, isLoading: true };

    case types.USER_LOGIN_SUCCESS:
      saveData('isAuth', true);
      saveData('isAdmin', payload.isAdmin);
      saveData('token', payload.token);

      return {
        ...oldstate,
        isLoading: false,
        isAuth: true,
        isAdmin: payload.isAdmin,
        token: payload.token,
      };

    case types.USER_LOGIN_FAILURE:
      saveData('isAuth', false);
      saveData('isAdmin', false);
      saveData('token', '');

      return {
        ...oldstate,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: '',
        isAdmin: false,
      };

    case types.USER_SIGNOUT_SUCCESS:
      saveData('isAuth', false);
      saveData('isAdmin', false);
      saveData('token', '');

      return {
        ...oldstate,
        isAuth: false,
        isLoading: false,
        isError: false,
        isAdmin: false,
        token: '',
      };

    default:
      return oldstate;
  }
};

export { reducer };
