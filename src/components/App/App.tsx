import React, { type FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { useAppDispatch } from '../../hooks/redux';
import { fetchHomeData } from '../../store/slices/home/homeActionCreators';
import { fetchStreet } from '../../store/slices/street/streetActionCreators';
import PrivateRoute from '../../utils/router/privateRoute';
import { RouteNames } from '../../pages/routeNames';
import { ColorModeContext } from '../../theme';
import { useMode } from '../../theme/hooks/useMode';
import { AuthRoot } from '../../pages/Auth';
import { TopBar } from '../TopBar';

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const [theme, colorMode] = useMode();

  useEffect(() => {
    void dispatch(fetchHomeData());
    void dispatch(fetchStreet());
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Routes>
            <Route path={RouteNames.LOGIN} element={<AuthRoot />} />
            <Route path={RouteNames.REGISTRATION} element={<AuthRoot />} />

            <Route element={<PrivateRoute />}>
              <Route path={RouteNames.DASHBOARD} element={<TopBar />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
