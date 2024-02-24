import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../Pages/Login';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return isLoggedIn ? children : <Login />;
};

export default PrivateRoute;
