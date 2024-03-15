import { createSlice } from '@reduxjs/toolkit';
import {
  type IGoogleSheetError,
  type ITableRow,
} from '../../../models/IGoogleSheet';
import { fetchHomeData } from './homeActionCreators';

interface IHomeState {
  status: string;
  homeData: ITableRow[];
  error: IGoogleSheetError | null;
}

const initialState: IHomeState = {
  status: '',
  homeData: [],
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.homeData = action.payload as ITableRow[];
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as IGoogleSheetError;
      });
  },
});

export default homeSlice.reducer;
