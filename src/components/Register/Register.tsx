import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import { useStyles } from '../Login/styles';
import { PasswordInput } from '../PasswordInput';

export const RegisterPage = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.title} variant="h2">
        Statistics registration
      </Typography>
      <Box className={classes.inputWrapper}>
        <TextField
          fullWidth
          label="First name"
          variant="outlined"
          placeholder="First name"
          type="text"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Last name"
          variant="outlined"
          placeholder="Last name"
          type="text"
          margin="normal"
        />
      </Box>
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        placeholder="Email address"
        type="email"
        margin="normal"
      />
      <PasswordInput />
      <PasswordInput placeholder="Repeat password" />
      <Button className={classes.button} variant="contained">
        Sign up
      </Button>
      <Typography className={classes.registrationText} variant="body1">
        Do you have an account?
        <span className={classes.registrationLink}>Authorization now</span>
      </Typography>
    </>
  );
};
