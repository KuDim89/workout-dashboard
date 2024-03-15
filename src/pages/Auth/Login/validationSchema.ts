import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Email Address must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must contain 8 or more characters')
    .required('Password is required'),
});
