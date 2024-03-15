import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { userSlice } from './slices/user';
import { streetSlice } from './slices/street';
import { homeSlice } from './slices/home';

const rootReducer = combineReducers({
  user: userSlice,
  street: streetSlice,
  home: homeSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
