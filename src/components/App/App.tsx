import React, { type FC, useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// import { useAppDispatch, useAppSelector } from "../../hooks/redux";
// import { fetchHome } from "../../store/actionCreators/Home";
import { ColorModeContext } from '../../theme';
import { useMode } from '../../theme/hooks/useMode';
import PrivateRoute from '../../utils/router/privateRoute';
import { TopBar } from '../TopBar';
import { RouteNames } from '../../pages/routeNames';
import { AuthRoot } from '../../pages/Auth';

export const App: FC = () => {
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
          <Routes>
            <Route path={RouteNames.LOGIN} element={<AuthRoot />} />
            <Route path={RouteNames.REGISTER} element={<AuthRoot />} />

            <Route element={<PrivateRoute />}>
              <Route path={RouteNames.DASHBOARD} element={<TopBar />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
