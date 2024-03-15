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
    title: {
      color: colors.grey[100],
      paddingBottom: theme.spacing(2),
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    formWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 640,
      padding: theme.spacing(5),
      borderRadius: 20,
      boxShadow: `5px 5px 10px ${colors.grey[500]}`,
      backgroundColor: `${colors.contrast.DEFAULT}`,
    },
    text: {
      marginTop: `${theme.spacing(3)} !important`,
      color: colors.grey[100],
      textAlign: 'center',
    },
    link: {
      margin: `0 ${theme.spacing(2)}`,
      color: theme.palette.primary.main,
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };
});
