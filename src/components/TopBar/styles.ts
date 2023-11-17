import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";
import { type Theme } from "@mui/material/styles";
import { type ThemeMode } from "../../theme/interfaces";

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode as ThemeMode);

  return {
    root: {
      position: "static",
      background: `${colors.primary.DEFAULT} !important`,
      borderBottom: `1px solid ${colors.borderColor}`,
      boxShadow: "none !important",
    },
  };
});
