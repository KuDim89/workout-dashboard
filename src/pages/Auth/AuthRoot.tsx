import React from 'react';
import { useLocation } from 'react-router-dom';

import { useStyles } from './styles';
import { RouteNames } from '../routeNames';
import { Login } from '../../components/Login';
import { RegisterPage } from '../../components/Register';
import { Logo } from '../../assets/icons';

export const AuthRoot = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <Logo className={classes.logo} />
        {location.pathname === RouteNames.LOGIN ? (
          <Login />
        ) : location.pathname === RouteNames.REGISTER ? (
          <RegisterPage />
        ) : null}
      </form>
    </div>
  );
};
