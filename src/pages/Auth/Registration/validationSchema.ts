import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  firstName: yup.string().trim().required('First Name is required'),
  lastName: yup.string().trim().required('Last Name is required'),
  email: yup
    .string()
    .trim()
    .email('Email Address must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must contain 8 or more characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});
