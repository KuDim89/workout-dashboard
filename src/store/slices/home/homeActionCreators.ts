import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';
import GoogleSheetsService from '../../../services/googleSheets/googleSheets.service';
import { SheetTitleType } from '../../../services/googleSheets/constants';

export const fetchHomeData = createAsyncThunk(
  'home/fetchHomeData',
  async (_, thunkAPI) => {
    try {
      return await GoogleSheetsService.getDataFromGoogleSheet(
        SheetTitleType.Home,
      );
      // todo: should define types for 'event'
    } catch (e) {
      return thunkAPI.rejectWithValue({
        code: (e as AxiosError).code,
        message: (e as AxiosError).message,
      });
    }
  },
);
