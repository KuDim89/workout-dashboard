import React, { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks/redux";
// import { fetchHome } from "../../store/actionCreators/Home";
import { ColorModeContext } from "../../theme";
import { ThemeProvider } from "@mui/material";
import { TopBar } from "../TopBar";
import { useMode } from "../../theme/hooks/useMode";

export const App: React.FC = () => {
  // const dispatch = useAppDispatch();
  const [theme, colorMode] = useMode();
  // const { homeData, isLoading, error } = useAppSelector((state) => state.home);

  useEffect(() => {
    // void dispatch(fetchHome());
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <TopBar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
