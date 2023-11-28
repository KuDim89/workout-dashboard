import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';

import { getColors } from '../../theme';
import { type ThemeMode } from '../../theme/interfaces';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme.palette.mode as ThemeMode);

  return {
    root: {
      position: 'static',
      background: `${colors.primary.DEFAULT}`,
      color: theme.palette.getContrastText(colors.white.DEFAULT),
      borderBottom: `1px solid ${colors.borderColor}`,
      boxShadow: 'none !important',
    },
    icon: {
      marginLeft: '10px !important',
    },
    search: {
      '&:hover': {
        backgroundColor: 'transparent !important',
      },
    },
  };
});
