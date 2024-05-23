import React, { type FC, useContext, useEffect, useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  useTheme,
  Alert,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { DarkMode, LightMode, MenuOutlined } from '@mui/icons-material';

import { useUserCredentials, useUserLocation } from '../../hooks/redux';
import { ColorModeContext } from '../../theme';
import { type ColorModeType, ThemeMode } from '../../theme/interfaces';
import { useStyles } from './styles';
import { UserMenu } from './UserMenu/UserMenu';
import { Date } from './Date';
import { Location } from './Location';
import { FlexBetween } from '../FlexBetween';

const geolocationWarning =
  'To use the application to the fullest, please allow your browser to access your geolocation.';

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const TopBar: FC<IProps> = ({ isOpen, setIsOpen }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const colorMode: ColorModeType = useContext(ColorModeContext);
  const { email } = useUserCredentials();
  const { error } = useUserLocation();
  const [isGeolocation, setIsGeolocation] = useState<boolean>(Boolean(error));
  const isFullInformation: boolean = useMediaQuery('(min-width: 665px)');
  const userGreeting = isFullInformation
    ? `Welcome, ${email.split('@')[0]}!`
    : email.split('@')[0];
  const avatarLetter = email[0].toUpperCase();

  useEffect(() => {
    setIsGeolocation(Boolean(error));
  }, [error]);

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <FlexBetween>
            {!isOpen && (
              <IconButton
                className={classes.menuButton}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <MenuOutlined />
              </IconButton>
            )}
            <Box>
              <Typography variant="h3" className={classes.greeting}>
                {userGreeting}
              </Typography>
              <Box className={classes.dateWrapper}>
                <Location isFullInformation={isFullInformation} />
                <Date />
              </Box>
            </Box>
          </FlexBetween>
          <Box display="flex">
            <Grid onClick={colorMode.toggleColorMode}>
              <IconButton className={classes.icon}>
                {theme.palette.mode === ThemeMode.Dark ? (
                  <LightMode />
                ) : (
                  <DarkMode />
                )}
              </IconButton>
            </Grid>
            <UserMenu abbreviation={avatarLetter} />
          </Box>
        </Toolbar>
      </AppBar>

      {isGeolocation && (
        <Alert
          severity="warning"
          className={classes.alert}
          onClose={() => {
            setIsGeolocation(false);
          }}
        >
          {geolocationWarning}
        </Alert>
      )}
    </>
  );
};
