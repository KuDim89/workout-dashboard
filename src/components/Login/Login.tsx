import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

import { useStyles } from './styles';
import { PasswordInput } from '../PasswordInput';

export const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h2">
        Statistics authorization
      </Typography>
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        placeholder="Email address"
        type="email"
        margin="normal"
        autoComplete="new-password"
      />
      <PasswordInput />
      <Button className={classes.button} variant="contained">
        Log in
      </Button>
      <Typography className={classes.registrationText} variant="body1">
        Don&apos;t have an account?
        <span className={classes.registrationLink}>Registration now</span>
      </Typography>
    </>
  );
};
