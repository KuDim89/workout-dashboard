import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';

import { getColors } from '../../../theme';
import { type ThemeMode } from '../../../theme/interfaces';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme.palette.mode as ThemeMode);

  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(2, 4),
      background: `${colors.primary.DEFAULT}`,
      color: `${colors.grey[300]}`,
      borderBottom: `1px solid ${colors.borderColor}`,
      boxShadow: 'none !important',
    },
    greetingText: {
      fontWeight: 600,
      fontSize: '16px',
    },
    icon: {
      marginLeft: '10px !important',
    },
    alert: {
      borderBottom: `1px solid ${colors.orange.DEFAULT}`,
      borderRadius: 0,
    },
  };
});
