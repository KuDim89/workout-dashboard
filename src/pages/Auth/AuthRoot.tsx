import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import { useStyles } from './styles';
import { RouteNames } from '../routeNames';
import { Login } from '../../components/Login';
import { RegisterPage } from './Register';

export const AuthRoot = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <Box className={classes.form}>
        {location.pathname === RouteNames.LOGIN ? (
          <Login />
        ) : location.pathname === RouteNames.REGISTER ? (
          <RegisterPage />
        ) : null}
      </Box>
    </div>
  );
};
