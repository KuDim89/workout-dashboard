import React, { useContext } from "react";
import { Box, Grid, IconButton, InputBase, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import {
  LightMode,
  DarkMode,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import { useStyles } from "./styles";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
        py: "24px",
      }}
    >
      <Grid>Welcome, Dmytro!</Grid>
      <Box display="flex">
        <Grid
          onClick={colorMode.toggleColorMode}
          sx={{
            px: "37px",
          }}
        >
          <IconButton
            sx={{
              mr: "45px",
            }}
          >
            {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Grid>
        <Box
          sx={{
            px: "37px",
            borderRight: `1px solid ${colors.grey.DEFAULT}`,
          }}
        >
          <IconButton>
            <NotificationsNone />
          </IconButton>
        </Box>
        <Grid
          sx={{
            display: "flex",
            backgroundColor: `${colors.primary[600]}`,
            borderRadius: "8px",
            ml: "28px",
          }}
        >
          <IconButton
            className={
              classes.root
            } /* sx={{ "&:hover": { backgroundColor: "transparent" } }} */
          >
            <Search />
          </IconButton>
          <InputBase sx={{ py: "12px", px: "18px" }} placeholder="Search" />
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBar;
