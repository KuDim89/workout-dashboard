import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITableRow } from "../../models/IGoogleSheet";

interface StreetState {
  streetData: ITableRow[];
  isLoading: boolean;
  error: string;
}

const initialState: StreetState = {
  streetData: [],
  isLoading: false,
  error: "",
};

export const streetSlice = createSlice({
  name: "street",
  initialState,
  reducers: {
    streetFetching: (state) => {
      state.isLoading = true;
    },
    streetFetchingSuccess: (state, action: PayloadAction<ITableRow[]>) => {
      state.isLoading = false;
      state.error = "";
      state.streetData = action.payload;
    },
    streetFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default streetSlice.reducer;
