import { createSlice } from '@reduxjs/toolkit';
import { LoadingDataStatus } from '../../../models/IGoogleSheet';
import { type IError } from '../../../models/IError';
import { googleSheetsAssets } from './actionCreator';
import { type ITransformedGoogleSheetsData } from '../../../models/ITransformedGoogleSheetsData';

interface IGoogleSheetsState {
  status: string;
  sheets: IGoogleSheetData[];
  error: IError | null;
}

export interface IGoogleSheetData {
  title: string;
  data: ITransformedGoogleSheetsData[];
}

const initialState: IGoogleSheetsState = {
  status: '',
  sheets: [],
  error: null,
};

const googleSheetsSlice = createSlice({
  name: 'googleSheetsAssets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(googleSheetsAssets.pending, (state) => {
        state.status = LoadingDataStatus.LOADING;
      })
      .addCase(googleSheetsAssets.fulfilled, (state, action) => {
        state.status = LoadingDataStatus.SUCCEEDED;
        state.sheets.push(action.payload as IGoogleSheetData);
      })
      .addCase(googleSheetsAssets.rejected, (state, action) => {
        state.status = LoadingDataStatus.FAILED;
        state.error = action.payload as IError;
      });
  },
});

export default googleSheetsSlice.reducer;
