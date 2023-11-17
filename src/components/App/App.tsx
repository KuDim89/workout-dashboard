import React, { useEffect } from "react";
import "./App.scss";
// import { useAppDispatch, useAppSelector } from "../../hooks/redux";
// import { fetchHome } from "../../store/actionCreators/Home";
import { ColorModeContext } from "../../theme";
import { ThemeProvider } from "@mui/material";
import TopBar from "../TopBar/TopBar";
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
        <div className="App">
          <TopBar />
          <header className="App-header">
            <p>Learn React</p>
            {/* {Boolean(isLoading) && <p>Loading...</p>}
            {error !== "" && <p>{error}</p>}
            {JSON.stringify(homeData, null, 2)} */}
          </header>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
