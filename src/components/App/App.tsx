import React, { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PrivateRoute from '../../utils/router/privateRoute';
import { RouteNames } from '../../pages/routeNames';
import { ColorModeContext } from '../../theme';
import { useMode } from '../../theme/hooks/useMode';
import { AuthRoot } from '../../pages/Auth';
import { Dashboard } from '../../pages/Dashboard';
import { Layout } from '../Layout';
import { SheetTitleType } from '../../services/googleSheets/googleSheets.service';

export const App: FC = () => {
  const [theme, colorMode] = useMode();

  return (
    // todo: Should get to know why color mode and theme have type any
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App" style={{ height: '100vh' }}>
          <Routes>
            <Route path={RouteNames.LOGIN} element={<AuthRoot />} />
            <Route path={RouteNames.REGISTRATION} element={<AuthRoot />} />

            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route
                  path={RouteNames.INFO}
                  element={<div>Info Page</div>}
                ></Route>
                <Route
                  path={RouteNames.HOME}
                  element={<Dashboard type={SheetTitleType.HOME} />}
                />
                <Route
                  path={RouteNames.STREET}
                  element={<Dashboard type={SheetTitleType.STREET} />}
                />
              </Route>
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
