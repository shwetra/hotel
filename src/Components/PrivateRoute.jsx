import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Login } from './Login';

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.AuthReducer);

  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
