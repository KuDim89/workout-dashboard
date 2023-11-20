import React, { useContext } from "react";
import { Box, Grid, IconButton, InputBase, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import {
  DarkMode,
  LightMode,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import { useStyles } from "./styles";
import { type ThemeMode } from "../../theme/interfaces";

export const TopBar = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode as ThemeMode);
  const classes = useStyles();

  // todo: should change type for colorMode variable
  const colorMode: any = useContext(ColorModeContext);

  // todo: should add dynamic user name for greeting section
  // todo: should use enum for mode
  return (
    <Box
      className={classes.root}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: "32px",
        py: "10px",
      }}
    >
      <Grid>Welcome, Dmytro!</Grid>
      <Box display="flex">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid onClick={colorMode.toggleColorMode}>
            <IconButton className={classes.icon}>
              {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Grid>
          <Grid>
            <IconButton className={classes.icon}>
              <NotificationsNone />
            </IconButton>
          </Grid>
        </Box>
        <Grid
          sx={{
            display: "flex",
            border: `1px solid ${colors.grey.DEFAULT}`,
            borderRadius: "30px",
            ml: "28px",
          }}
        >
          <IconButton className={classes.search}>
            <Search />
          </IconButton>
          <InputBase sx={{ py: "12px", px: "18px" }} placeholder="Search" />
        </Grid>
      </Box>
    </Box>
  );
};
