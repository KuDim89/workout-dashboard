import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';
import GoogleSheetsService, {
  SheetTitleType,
} from '../../../services/googleSheets/googleSheets.service';

export const fetchHomeData = createAsyncThunk(
  'home/fetchHomeData',
  async (_, { rejectWithValue }) => {
    try {
      return await GoogleSheetsService.getDataFromGoogleSheet(
        SheetTitleType.Home,
      );
    } catch (e) {
      const sheetError = e as AxiosError;

      return rejectWithValue({
        code: sheetError.code,
        message: sheetError.message,
      });
    }
  },
);
