import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';

import { getColors } from '../../../theme';
import { type ThemeMode } from '../../../theme/interfaces';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme.palette.mode as ThemeMode);

  return {
    root: {
      justifyContent: 'center',
      marginLeft: theme.spacing(2),
    },
    avatar: {
      width: 45,
      height: 45,
      backgroundColor: `${colors.orange.DEFAULT}!important`,
      cursor: 'pointer',
    },
    userMenu: {
      top: '22px !important',
      '& .MuiPaper-root': {
        borderRadius: '0 0 4px 4px !important',
      },
    },
    itemIcon: {
      marginRight: theme.spacing(4),
    },
  };
});
