import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';
import { getColors } from '../../theme';
import { type ThemeMode } from '../../theme/interfaces';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme.palette.mode as ThemeMode);

  return {
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
      backgroundColor: colors.backgroundColor,
    },
  };
});
