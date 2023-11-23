import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useStyles } from './styles';

export const Login = () => {
  const classes = useStyles();

  return (
    <form>
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
      />
      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        placeholder="Password"
        type="password"
        margin="normal"
        autoComplete="new-password"
      />
      <Button className={classes.button} variant="contained">
        Log in
      </Button>
      <Typography className={classes.registrationText} variant="body1">
        Don&apos;t have an account?
        <span className={classes.registrationLink}>Registration</span>
      </Typography>
    </form>
  );
};
