import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';

import { getColors } from '../../../../theme';
import { type ThemeMode } from '../../../../theme/interfaces';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme.palette.mode as ThemeMode);

  return {
    avatar: {
      width: 45,
      height: 45,
      backgroundColor: `${colors.orange.DEFAULT}!important`,
      cursor: 'pointer',
    },
    itemIcon: {
      marginRight: theme.spacing(4),
    },
  };
});
