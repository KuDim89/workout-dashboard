import React, { type FC, useContext, useEffect, useState } from 'react';
import { Box, Grid, IconButton, useTheme, Alert } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

import { useUserCredentials, useUserLocation } from '../../../hooks/redux';
import { ColorModeContext, getColors } from '../../../theme';
import { type ColorModeType, ThemeMode } from '../../../theme/interfaces';
import { useStyles } from './styles';
import { UserMenu } from './UserMenu/UserMenu';
import { Date } from './Date/Date';

export const TopBar: FC = () => {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode as ThemeMode);
  const classes = useStyles(theme);
  const colorMode: ColorModeType = useContext(ColorModeContext);
  const { email } = useUserCredentials();
  const { error } = useUserLocation();
  const [isGeolocation, setIsGeolocation] = useState<boolean>(Boolean(error));
  const userGreeting = `Welcome, ${email.split('@')[0]}!`;
  const avatarLetter = email[0].toUpperCase();

  useEffect(() => {
    setIsGeolocation(Boolean(error));
  }, [error]);

  return (
    <>
      <Box className={classes.root}>
        <Grid>
          <Box sx={{ fontWeight: 600, fontSize: '16px' }}>{userGreeting}</Box>
          <Date />
        </Grid>
        <Box display="flex">
          <Box display="flex" alignItems="center">
            <Grid onClick={colorMode.toggleColorMode}>
              <IconButton className={classes.icon}>
                {theme.palette.mode === ThemeMode.Dark ? (
                  <LightMode />
                ) : (
                  <DarkMode />
                )}
              </IconButton>
            </Grid>
          </Box>
          <UserMenu abbreviation={avatarLetter} />
        </Box>
      </Box>
      {isGeolocation && (
        <Alert
          sx={{
            borderBottom: `1px solid ${colors.orange.DEFAULT}`,
            borderRadius: 0,
          }}
          severity="warning"
          onClose={() => {
            setIsGeolocation(false);
          }}
        >
          To use the application to the fullest, please allow your browser to
          access your geolocation.
        </Alert>
      )}
    </>
  );
};
