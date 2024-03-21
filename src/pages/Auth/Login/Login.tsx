import React, { type FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { type FormikHelpers, useFormik } from 'formik';
import dayjs from 'dayjs';
import { Button, TextField, Typography } from '@mui/material';

import { useAppDispatch, useUserCredentials } from '../../../hooks/redux';
import {
  saveLoginTime,
  saveUserCredentials,
} from '../../../store/slices/user/userSlice';
import { fetchLocation } from '../../../store/slices/user/userActionCreators';
import { RouteNames } from '../../routeNames';
import { validationSchema } from './validationSchema';
import { useStyles } from './styles';
import { PasswordInput } from '../PasswordInput';
import { initialValues } from './constants';
import { type IUserCredentials } from '../../../models/IUser';

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useUserCredentials();
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (
    values: IUserCredentials,
    actions: FormikHelpers<IUserCredentials>,
  ) => {
    if (formik.isValid) {
      dispatch(saveUserCredentials(values));
      dispatch(saveLoginTime(dayjs().toISOString()));
      void dispatch(fetchLocation());
      actions.resetForm();
      navigate('/');
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form
      className={classes.form}
      onSubmit={formik.handleSubmit}
      noValidate={true}
    >
      <Typography className={classes.title} variant="h2">
        Statistics authorization
      </Typography>
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
        value={formik.values.email ?? email}
        error={Boolean(formik.errors.email) && Boolean(formik.touched.email)}
        onChange={formik.handleChange}
        helperText={
          Boolean(formik.errors.email) &&
          Boolean(formik.touched.email) &&
          formik.errors.email
        }
      />
      <PasswordInput
        value={formik.values.password ?? password}
        touched={formik.touched.password}
        errors={formik.errors.password}
        handleChange={formik.handleChange}
      />
      <Button type="submit" className={classes.button} variant="contained">
        Log in
      </Button>
      <Typography className={classes.registrationText} variant="body1">
        Don&apos;t have an account?
        <NavLink
          to={RouteNames.REGISTRATION}
          className={classes.registrationLink}
        >
          Registration now
        </NavLink>
      </Typography>
    </form>
  );
};
