import React, { useContext } from 'react';
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import {
  DarkMode,
  LightMode,
  NotificationsNone,
  Search,
} from '@mui/icons-material';

import { useUserCredentials } from '../../hooks/redux';
import { ColorModeContext, getColors } from '../../theme';
import { type ColorModeType, ThemeMode } from '../../theme/interfaces';
import { useStyles } from './styles';

export const TopBar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const colors = getColors(theme.palette.mode as ThemeMode);
  const colorMode: ColorModeType = useContext(ColorModeContext);
  const userData = useUserCredentials();
  const userGreeting = `Welcome, ${userData.email?.split('@')[0]}!`;

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
          <Grid>
            <IconButton className={classes.icon}>
              <NotificationsNone />
            </IconButton>
          </Grid>
        </Box>
        <Grid
          sx={{
            display: 'flex',
            border: `1px solid ${colors.grey.DEFAULT}`,
            borderRadius: '30px',
            ml: '28px',
          }}
        >
          <IconButton className={classes.search}>
            <Search />
          </IconButton>
          <InputBase sx={{ py: '12px', px: '18px' }} placeholder="Search" />
        </Grid>
      </Box>
    </Box>
  );
};
