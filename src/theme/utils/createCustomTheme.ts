import { type ICustomColors, type ThemeMode } from '../interfaces';

export const createCustomTheme = (mode: ThemeMode, colors: ICustomColors) => ({
  primary: {
    main: colors.orange.DEFAULT,
  },
  secondary: {
    main: colors.blue.DEFAULT,
  },
  neutral: {
    dark: colors.black[500],
    light: colors.white[100],
  },
});
