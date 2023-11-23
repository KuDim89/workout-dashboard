import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';

import { getColors } from '../../theme';
import { type ThemeMode } from '../../theme/interfaces';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme.palette.mode as ThemeMode);

  return {
    title: {
      color: colors.grey[100],
      paddingBottom: theme.spacing(2),
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    button: {
      textTransform: 'capitalize',
      marginTop: `${theme.spacing(2)} !important`,
      width: '100%',
    },
    registrationText: {
      marginTop: `${theme.spacing(3)} !important`,
      color: colors.grey[100],
      textAlign: 'center',
    },
    registrationLink: {
      margin: `0 ${theme.spacing(2)}`,
      color: theme.palette.primary.main,
      cursor: 'pointer',
    },
  };
});
