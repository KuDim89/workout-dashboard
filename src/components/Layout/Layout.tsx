import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';

import { SideBar } from './SideBar';
import { TopBar } from './TopBar';
import { useStyles } from './styles';

export const Layout = () => {
  const isNotMobile: boolean = useMediaQuery('(min-width: 600px)');
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(true);
  const classes = useStyles();

  return (
    <Box display={isNotMobile ? 'flex' : 'block'} className={classes.root}>
      <SideBar
        isNotMobile={isNotMobile}
        drawerWidth="250px"
        isOpen={isOpenDrawer}
        setIsOpen={setIsOpenDrawer}
      />
      <Box className={classes.wrapper}>
        <TopBar />
        <Outlet />
      </Box>
    </Box>
  );
};
