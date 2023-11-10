import { combineReducers, configureStore } from "@reduxjs/toolkit";
import streetReducer from "./reducers/StreetSlice";
import homeReducer from "./reducers/HomeSlice";

const rootReducer = combineReducers({
  streetReducer,
  homeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
