import { useMemo, useState } from "react";
import { createTheme } from "@mui/material";

import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { themeSettings } from "../index";
import { LocalStorageKeys, ThemeMode } from "../interfaces";

export const useMode = () => {
  const themeValue = getLocalStorage(LocalStorageKeys.ThemeMode);
  const modeInitialValue =
    themeValue != null ? JSON.parse(themeValue) : ThemeMode.Dark;
  const [mode, setMode] = useState<ThemeMode>(modeInitialValue);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev: ThemeMode) => {
          const colorMode =
            prev === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
          setLocalStorage(LocalStorageKeys.ThemeMode, colorMode);
          return colorMode;
        });
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
