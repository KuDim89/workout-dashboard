import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import GoogleSheetsService, {
  type SheetTitleType,
} from '../../../services/googleSheets/googleSheets.service';
import { type ITransformedGoogleSheetsData } from '../../../models/ITransformedGoogleSheetsData';

export const googleSheetsAssets = createAsyncThunk(
  'googleSheetsAssets',
  async (sheetTitle: SheetTitleType, { rejectWithValue }) => {
    try {
      const responseData =
        await GoogleSheetsService.getDataFromGoogleSheet(sheetTitle);

      return {
        title: sheetTitle as SheetTitleType,
        data: responseData as ITransformedGoogleSheetsData[],
      };
    } catch (e) {
      const sheetError = e as AxiosError;

      return rejectWithValue({
        code: sheetError.code,
        message: sheetError.message,
      });
    }
  },
);
