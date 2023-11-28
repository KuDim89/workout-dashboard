import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';
import backgroundImage from '../../assets/image/pull-up.jpg';

import { getColors } from '../../theme';
import { ThemeMode } from '../../theme/interfaces';

export const useStyles = makeStyles((theme: Theme) => {
  const isDarkMode = theme.palette.mode === ThemeMode.Dark;
  const colors = getColors(theme.palette.mode as ThemeMode);

  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: `${colors.primary.DEFAULT}`,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      background: `no-repeat center center / cover`,
      backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
        isDarkMode ? 0.527 : 0
      }),rgba(0, 0, 0, ${isDarkMode ? 0.8 : 0})) , url(${backgroundImage})`,
    },
    logo: {
      width: 200,
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(3),
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      maxWidth: 640,
      margin: 'auto',
      padding: theme.spacing(5),
      borderRadius: 20,
      boxShadow: `5px 5px 10px ${colors.grey[600]}`,
      backgroundColor: `${colors.contrast.DEFAULT}`,
    },
  };
});
