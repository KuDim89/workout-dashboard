import { configureStore } from "@reduxjs/toolkit";

import streetReducer from "./slices/StreetSlice";
import homeReducer from "./slices/HomeSlice";

const store = configureStore({
  reducer: {
    street: streetReducer,
    home: homeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
