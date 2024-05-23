import React from 'react';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { useStyles } from './styles';

export const Loader = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.root}>
      <CircularProgress />
      <Typography>Loading...</Typography>
    </Box>
  );
};
