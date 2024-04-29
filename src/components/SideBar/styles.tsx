import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';
import { getColors } from '../../theme';
import { type ThemeMode } from '../../theme/interfaces';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = getColors(theme.palette.mode as ThemeMode);

  return {
    link: {
      textDecoration: 'none',
      color: colors.orange.DEFAULT,
    },
    pageLink: {
      color: colors.secondary.DEFAULT,
      textDecoration: 'none',
      width: '100%',
    },
    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      cursor: 'pointer',
    },
    listItem: {
      padding: '0 !important',
      '&:hover': {
        backgroundColor: colors.orange.DEFAULT,
        '& $itemIcon': {
          color: `${colors.white.DEFAULT} !important`,
        },
      },
      '&.Mui-selected': {
        borderTop: `1px solid ${colors.orange.DEFAULT}`,
        borderBottom: `1px solid ${colors.orange.DEFAULT}`,
        '&:hover': {
          backgroundColor: `${colors.orange.DEFAULT} !important`,
        },
      },
    },
    itemButton: {
      textDecoration: 'none',
      fontWeight: 600,
      '&:hover': {
        color: colors.white.DEFAULT,
      },
    },
    itemIcon: {
      color: `${colors.secondary.DEFAULT} !important`,
    },
  };
});
