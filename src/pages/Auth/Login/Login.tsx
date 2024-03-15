import React, { type FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { type FormikHelpers, useFormik } from 'formik';
import { Button, TextField, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { saveUser } from '../../../store/slices/user/userSlice';
import { RouteNames } from '../../routeNames';
import { validationSchema } from './validationSchema';
import { useStyles } from './styles';
import { PasswordInput } from '../PasswordInput';

interface IUserLoginData {
  email: string;
  password: string;
}

const initialValues: IUserLoginData = {
  email: '',
  password: '',
};

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (
    values: IUserLoginData,
    actions: FormikHelpers<IUserLoginData>,
  ) => {
    if (formik.isValid) {
      dispatch(saveUser(values));
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
        value={formik.values.email ?? userData?.email}
        error={Boolean(formik.errors.email) && Boolean(formik.touched.email)}
        onChange={formik.handleChange}
        helperText={
          Boolean(formik.errors.email) &&
          Boolean(formik.touched.email) &&
          formik.errors.email
        }
      />
      <PasswordInput
        value={formik.values.password ?? userData?.password}
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
