import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';

import { SideBar } from '../SideBar';
import { TopBar } from '../TopBar';
import { useStyles } from './styles';

export const Layout = () => {
  const classes = useStyles();
  const isNotMobile: boolean = useMediaQuery('(min-width: 600px)');
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(isNotMobile);
  const drawerWidth = '250px';

  return (
    <Box className={classes.root} display={isNotMobile ? 'flex' : 'block'}>
      <SideBar
        drawerWidth={drawerWidth}
        isOpen={isOpenDrawer}
        setIsOpen={setIsOpenDrawer}
      />
      <Box className={classes.mainSection}>
        <TopBar isOpen={isOpenDrawer} setIsOpen={setIsOpenDrawer} />
        <Outlet />
      </Box>
    </Box>
  );
};
