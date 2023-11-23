import { createContext } from 'react';

import { darkModeColors, lightModeColors } from './constants';
import { createCustomTheme } from './utils/createCustomTheme';
import { ThemeMode } from './interfaces';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const getColors = (mode: ThemeMode) => ({
  ...(mode === ThemeMode.Dark ? darkModeColors : lightModeColors),
});

export const themeSettings = (mode: ThemeMode) => {
  const colors = getColors(mode);

  return {
    palette: {
      mode,
      ...createCustomTheme(mode, colors),
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 500,
      fontWeightBold: 700,
      fontWeightRegular: 400,
      color: colors.grey[400],
      h1: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 28,
        fontWeight: 600,
      },
      h2: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 20,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 18,
        fontWeight: 600,
      },
      body1: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 14,
        fontWeight: 500,
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label': {
              color: colors.grey[100],
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.grey[400], // Set your custom border color
            },
            input: {
              ':-webkit-autofill': {
                WebkitBoxShadow: `0 0 0 1000px ${colors.grey[400]} inset`,
              },
            },
          },
        },
      },
    },
  };
};
