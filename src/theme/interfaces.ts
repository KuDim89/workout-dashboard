export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export enum LocalStorageKeys {
  ThemeMode = 'themeMode',
}

interface ColorShades {
  DEFAULT: string;
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  950?: string;
}

export interface ICustomColors {
  primary: ColorShades;
  secondary: ColorShades;
  grey: ColorShades;
  orange: ColorShades;
  yellow: ColorShades;
  black: ColorShades;
  white: ColorShades;
  contrast: ColorShades;
  borderColor: string;
}
