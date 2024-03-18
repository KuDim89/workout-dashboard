import React, { type FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  useTheme,
  Stack,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { Settings, PowerSettingsNew } from '@mui/icons-material';

import { removeUser } from '../../../store/slices/user/userSlice';
import { useAppDispatch } from '../../../hooks/redux';
import { useStyles } from './styles';

interface IProps {
  abbreviation: string;
}

export const UserMenu: FC<IProps> = ({ abbreviation }) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    dispatch(removeUser());
    navigate('login');
  };

  return (
    <Stack
      sx={{
        justifyContent: 'center',
        marginLeft: theme.spacing(2),
      }}
    >
      <Avatar
        alt={abbreviation}
        className={classes.avatar}
        onClick={handleOpenUserMenu}
      >
        {abbreviation}
      </Avatar>

      <Menu
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ top: '50px' }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          component={Link}
          to="/account-settings"
          onClick={handleCloseUserMenu}
        >
          <Settings className={classes.itemIcon} />
          <Typography>Settings</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <PowerSettingsNew className={classes.itemIcon} />
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </Stack>
  );
};
