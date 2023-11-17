import { type ICustomColors, ThemeMode } from "../interfaces";

export const createCustomTheme = (mode: ThemeMode, colors: ICustomColors) => {
  const isDarkTheme = mode === ThemeMode.Dark;

  return {
    primary: {
      main: isDarkTheme ? colors.black.DEFAULT : colors.white.DEFAULT,
    },
    secondary: {
      main: colors.grey.DEFAULT,
    },
    neutral: {
      dark: colors.black[500],
      light: colors.white[100],
    },
  };
};
