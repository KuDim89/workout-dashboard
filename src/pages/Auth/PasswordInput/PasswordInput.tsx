import React, { type FC, useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { type IPasswordInput, PasswordType } from './interfaces';

export const PasswordInput: FC<IPasswordInput> = (props) => {
  const { value, errors, touched, name, label, placeholder, handleChange } =
    props;
  const [showPassword, setShowPassword] = useState(false);
  const fieldName = name ?? 'password';

  return (
    <TextField
      fullWidth
      required
      name={fieldName}
      label={label ?? 'Password'}
      margin="normal"
      variant="outlined"
      placeholder={placeholder ?? 'Password'}
      autoComplete={name ?? 'password'}
      type={showPassword ? PasswordType.TEXT : PasswordType.PASSWORD}
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              size="small"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      helperText={Boolean(errors) && Boolean(touched) && errors}
      error={Boolean(errors) && Boolean(touched)}
    />
  );
};
