import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userSlice } from './slices/user';
import { googleSheetsSlice } from './slices/googleSheetsAssets';

const rootReducer = combineReducers({
  user: userSlice,
  googleSheets: googleSheetsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
