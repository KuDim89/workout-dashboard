import React, { type FC, type ReactElement, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import { HomeOutlined, ChevronLeftOutlined } from '@mui/icons-material';

import { FlexBetween } from './FlexBetween';
import { getColors } from '../../../theme';
import { type ThemeMode } from '../../../theme/interfaces';
import { useStyles } from './styles';
import { Logo } from '../../../assets/icons/index';

interface INavMenuProps {
  id: number;
  name: string;
  icon: ReactNode;
  patch: string;
}

const navMenu: INavMenuProps[] = [
  {
    id: 1,
    name: 'Home',
    icon: <HomeOutlined />,
    patch: '/',
  },
  {
    id: 2,
    name: 'Login',
    icon: <HomeOutlined />,
    patch: '/login',
  },
];

interface IProps {
  isNotMobile: boolean;
  drawerWidth: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SideBar: FC<IProps> = ({
  isNotMobile,
  drawerWidth,
  isOpen,
  setIsOpen,
}) => {
  const location = useLocation();
  const theme = useTheme();
  const classes = useStyles(theme);
  const colors = getColors(theme.palette.mode as ThemeMode);

  const renderMenu = navMenu.map(
    (item): ReactElement => (
      <ListItem
        key={item.id}
        className={classes.listItem}
        selected={item.patch === location.pathname}
      >
        <Link to={item.patch} className={classes.pageLink}>
          <ListItemButton className={classes.itemButton}>
            <ListItemIcon className={classes.itemIcon}>
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography>{item.name}</Typography>
            </ListItemText>
          </ListItemButton>
        </Link>
      </ListItem>
    ),
  );

  return (
    <Box component="nav">
      {isOpen && (
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          variant="persistent"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              backgroundColor: `${colors.primary.DEFAULT}`,
              width: drawerWidth,
              borderRight: `1px solid ${colors.borderColor}`,
            },
          }}
        >
          <Box width="100%">
            <Box>
              <FlexBetween>
                <Link to="/" className={classes.link}>
                  <Box className={classes.logoWrapper}>
                    <Logo width={70} />
                    <Typography
                      variant="h1"
                      color={
                        theme.palette.mode === 'dark'
                          ? colors.white.DEFAULT
                          : colors.black.DEFAULT
                      }
                    >
                      WD
                    </Typography>
                  </Box>
                </Link>
                {!isNotMobile && (
                  <IconButton
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <ChevronLeftOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>{renderMenu}</List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};
