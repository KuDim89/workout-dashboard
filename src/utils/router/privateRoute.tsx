import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RouteNames } from "../../pages/routeNames";

const PrivateRoute = () => {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to={RouteNames.LOGIN} />;
};

export default PrivateRoute;
