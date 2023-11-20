import { createContext } from "react";

import { darkModeColors, lightModeColors } from "./constants";
import { ThemeMode } from "./interfaces";
import { createCustomTheme } from "./utils/createCustomTheme";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const tokens = (mode: ThemeMode) => ({
  ...(mode === ThemeMode.Dark ? darkModeColors : lightModeColors),
});

export const themeSettings = (mode: ThemeMode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode,
      ...createCustomTheme(mode, colors),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 500,
      fontWeightBold: 700,
      fontWeightRegular: 400,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 600,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 18,
        fontWeight: 600,
      },
      body1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 500,
      },
    },
  };
};
