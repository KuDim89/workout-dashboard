import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ITableRow } from "../../models/IGoogleSheet";

interface HomeState {
  homeData: ITableRow[];
  isLoading: boolean;
  error: string;
}

const initialState: HomeState = {
  homeData: [],
  isLoading: false,
  error: "",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    homeFetching: (state) => {
      state.isLoading = true;
    },
    homeFetchingSuccess: (state, action: PayloadAction<ITableRow[]>) => {
      state.isLoading = false;
      state.error = "";
      state.homeData = action.payload;
    },
    homeFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default homeSlice.reducer;
