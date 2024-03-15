import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { RouteNames } from '../../pages/routeNames';
import { useUserCredentials } from '../../hooks/redux';

const PrivateRoute = () => {
  const { email, password } = useUserCredentials();
  const auth = Boolean(email) && Boolean(password);

  return auth ? <Outlet /> : <Navigate to={RouteNames.LOGIN} />;
};

export default PrivateRoute;
