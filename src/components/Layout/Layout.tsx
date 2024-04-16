import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';

import { SideBar } from './SideBar';
import { TopBar } from './TopBar';

export const Layout = () => {
  const isNotMobile: boolean = useMediaQuery('(min-width: 600px)');
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(true);

  return (
    <Box
      display={isNotMobile ? 'flex' : 'block'}
      widtn="100%"
      height="100%"
      justifyContent="space-between"
    >
      <SideBar
        isNotMobile={isNotMobile}
        drawerWidth="250px"
        isOpen={isOpenDrawer}
        setIsOpen={setIsOpenDrawer}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="100%"
      >
        <TopBar />
        <Outlet />
      </Box>
    </Box>
  );
};
