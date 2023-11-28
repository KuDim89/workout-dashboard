import React, { type FC, useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { type IPasswordInput, PasswordType } from './interfaces';

export const PasswordInput: FC<IPasswordInput> = ({ placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      label="Password"
      variant="outlined"
      placeholder={placeholder ?? 'Password'}
      type={showPassword ? PasswordType.TEXT : PasswordType.PASSWORD}
      margin="normal"
      autoComplete="new-password"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
