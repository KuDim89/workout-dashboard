import React, { type FC, useContext } from 'react';
import { Box, Grid, IconButton, useTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

import { useUserCredentials } from '../../hooks/redux';
import { ColorModeContext } from '../../theme';
import { type ColorModeType, ThemeMode } from '../../theme/interfaces';
import { useStyles } from './styles';
import { UserMenu } from './UserMenu/UserMenu';

export const TopBar: FC = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const colorMode: ColorModeType = useContext(ColorModeContext);
  const userData = useUserCredentials();
  const userGreeting = `Welcome, ${userData.email.split('@')[0]}!`;
  const avatarLetter = userData.email[0].toUpperCase();

  return (
    <Box
      className={classes.root}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        px: '32px',
        py: '10px',
      }}
    >
      <Grid>
        <>{userGreeting}</>
        <p>123</p>
      </Grid>
      <Box display="flex">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
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
  );
};
