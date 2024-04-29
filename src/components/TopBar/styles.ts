import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';

import { getColors } from '../../theme';
import { ThemeMode } from '../../theme/interfaces';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme.palette.mode as ThemeMode);

  return {
    root: {
      background: `${colors.primary.DEFAULT} !important`,
      borderBottom: `1px solid ${colors.borderColor}`,
      boxShadow: 'none !important',
    },
    toolbar: {
      justifyContent: 'space-between',
      padding: theme.spacing(2, 4),
    },
    icon: {
      marginLeft: `${theme.spacing(1)} !important`,
    },
    menuButton: {
      marginRight: `${theme.spacing(3)} !important`,
    },
    greeting: {
      color: `${
        theme.palette.mode === ThemeMode.Dark
          ? colors.white.DEFAULT
          : colors.black.DEFAULT
      }`,
    },
    dateWrapper: {
      display: 'flex',
      marginTop: theme.spacing(1),
      color: colors.grey[300],
    },
    alert: {
      borderBottom: `1px solid ${colors.orange.DEFAULT}`,
      borderRadius: `0 !important`,
      padding: `${theme.spacing(0.5, 1)} !important`,
    },
  };
});
