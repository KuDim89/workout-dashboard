import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ITableRow } from '../../../models/IGoogleSheet';
import { type IError } from '../../../models/IError';

interface IStreetState {
  status: string;
  streetData: ITableRow[];
  error: IError | null;
}

const initialState: IStreetState = {
  status: '',
  streetData: [],
  error: null,
};

const streetSlice = createSlice({
  name: 'street',
  initialState,
  reducers: {
    streetFetching: (state: IStreetState) => {
      state.status = 'loading';
    },
    streetFetchingSuccess: (
      state: IStreetState,
      action: PayloadAction<ITableRow[]>,
    ) => {
      state.status = 'succeeded';
      state.streetData = action.payload;
    },
    streetFetchingError: (
      state: IStreetState,
      action: PayloadAction<IError>,
    ) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { streetFetching, streetFetchingSuccess, streetFetchingError } =
  streetSlice.actions;
export default streetSlice.reducer;
