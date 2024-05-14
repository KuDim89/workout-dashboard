import { makeStyles } from '@mui/styles';
import { type Theme } from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    gap: theme.spacing(2),
  },
}));
