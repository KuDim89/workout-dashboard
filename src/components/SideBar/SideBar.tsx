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
import {
  HomeOutlined,
  ChevronLeftOutlined,
  LightModeOutlined,
  InfoOutlined,
} from '@mui/icons-material';

import { FlexBetween } from '../FlexBetween';
import { getColors } from '../../theme';
import { ThemeMode } from '../../theme/interfaces';
import { useStyles } from './styles';
import { Logo } from '../../assets/icons';
import { RouteNames } from '../../pages/routeNames';

interface INavMenuProps {
  id: number;
  name: string;
  icon: ReactNode;
  patch: string;
}

const navMenu: INavMenuProps[] = [
  {
    id: 1,
    name: 'Info',
    icon: <InfoOutlined />,
    patch: RouteNames.INFO,
  },
  {
    id: 2,
    name: 'Home',
    icon: <HomeOutlined />,
    patch: RouteNames.HOME,
  },
  {
    id: 3,
    name: 'Street',
    icon: <LightModeOutlined />,
    patch: RouteNames.STREET,
  },
];

interface IProps {
  drawerWidth: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SideBar: FC<IProps> = ({ drawerWidth, isOpen, setIsOpen }) => {
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
              width: drawerWidth,
              backgroundColor: `${colors.primary.DEFAULT}`,
              borderRight: `1px solid ${colors.borderColor}`,
            },
          }}
        >
          <Box sx={{ padding: theme.spacing(1.3) }}>
            <FlexBetween>
              <Link to="/" className={classes.link}>
                <Box className={classes.logoWrapper}>
                  <Logo width={70} />
                  <Typography
                    variant="h1"
                    sx={{
                      color: `${
                        theme.palette.mode === ThemeMode.Dark
                          ? colors.white.DEFAULT
                          : colors.black.DEFAULT
                      } !important`,
                    }}
                  >
                    WD
                  </Typography>
                </Box>
              </Link>

              <IconButton
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <ChevronLeftOutlined />
              </IconButton>
            </FlexBetween>
          </Box>
          <List>{renderMenu}</List>
        </Drawer>
      )}
    </Box>
  );
};
