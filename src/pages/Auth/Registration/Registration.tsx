import React from 'react';
import { NavLink } from 'react-router-dom';
import { type FormikHelpers, useFormik } from 'formik';
import { Box, Button, TextField, Typography } from '@mui/material';

import { RouteNames } from '../../routeNames';
import { validationSchema } from './validationSchema';
import { useStyles } from '../Login/styles';
import { PasswordInput } from '../PasswordInput';

interface IRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: IRegistrationData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const Registration = () => {
  const classes = useStyles();

  const handleSubmit = (
    values: IRegistrationData,
    actions: FormikHelpers<IRegistrationData>,
  ) => {
    if (formik.isValid) {
      console.log('Valid registration form', formik.isValid);
      actions.resetForm();
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Typography className={classes.title} variant="h2">
        Statistics registration
      </Typography>
      <Box className={classes.inputWrapper}>
        <TextField
          required
          fullWidth
          name="firstName"
          label="First Name"
          margin="normal"
          variant="outlined"
          placeholder="First Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={formik.values.firstName}
          error={
            Boolean(formik.errors.firstName) &&
            Boolean(formik.touched.firstName)
          }
          onChange={formik.handleChange}
          helperText={
            Boolean(formik.errors.firstName) &&
            Boolean(formik.touched.firstName) &&
            formik.errors.firstName
          }
        />

        <TextField
          required
          fullWidth
          name="lastName"
          label="Last Name"
          margin="normal"
          variant="outlined"
          placeholder="Last Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={formik.values.lastName}
          error={
            Boolean(formik.errors.lastName) && Boolean(formik.touched.lastName)
          }
          onChange={formik.handleChange}
          helperText={
            Boolean(formik.errors.lastName) &&
            Boolean(formik.touched.lastName) &&
            formik.errors.lastName
          }
        />
      </Box>
      <TextField
        required
        fullWidth
        name="email"
        label="Email"
        margin="normal"
        variant="outlined"
        placeholder="Email Address"
        type="email"
        InputLabelProps={{
          shrink: true,
        }}
        value={formik.values.email}
        error={Boolean(formik.errors.email) && Boolean(formik.touched.email)}
        onChange={formik.handleChange}
        helperText={
          Boolean(formik.errors.email) &&
          Boolean(formik.touched.email) &&
          formik.errors.email
        }
      />

      <PasswordInput
        value={formik.values.password}
        touched={formik.touched.password}
        errors={formik.errors.password}
        handleChange={formik.handleChange}
      />

      <PasswordInput
        name="confirmPassword"
        label="Confirm Password"
        value={formik.values.confirmPassword}
        touched={Boolean(formik.touched.confirmPassword)}
        errors={formik.errors.confirmPassword}
        handleChange={formik.handleChange}
      />
      <Button type="submit" className={classes.button} variant="contained">
        Sign up
      </Button>
      <Typography className={classes.registrationText} variant="body1">
        Do you have an account?
        <NavLink to={RouteNames.LOGIN} className={classes.registrationLink}>
          Authorization now
        </NavLink>
      </Typography>
    </form>
  );
};
