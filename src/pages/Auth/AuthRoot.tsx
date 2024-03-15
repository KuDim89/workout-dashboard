import React from 'react';
import { useLocation } from 'react-router-dom';

import { useStyles } from './styles';
import { RouteNames } from '../routeNames';
import { Logo } from '../../assets/icons';
import { Login } from './Login';
import { Registration } from './Registration';

export const AuthRoot = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <div className={classes.formWrapper}>
        <Logo className={classes.logo} />
        {location.pathname === RouteNames.LOGIN ? (
          <Login />
        ) : location.pathname === RouteNames.REGISTRATION ? (
          <Registration />
        ) : null}
      </div>
    </div>
  );
};
