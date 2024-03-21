import { type AxiosError } from 'axios';

import { type AppDispatch } from '../../index';
import GoogleSheetsService, {
  SheetTitleType,
} from '../../../services/googleSheets/googleSheets.service';
import { type ITableRow } from '../../../models/IGoogleSheet';
import {
  streetFetching,
  streetFetchingError,
  streetFetchingSuccess,
} from './streetSlice';

export const fetchStreet = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(streetFetching());
    const response = (await GoogleSheetsService.getDataFromGoogleSheet(
      SheetTitleType.Street,
    )) as ITableRow[];
    dispatch(streetFetchingSuccess(response));
  } catch (e) {
    const sheetError = e as AxiosError;

    dispatch(
      streetFetchingError({
        code: sheetError?.code != null ? sheetError.code : '403',
        message: sheetError.message,
      }),
    );
  }
};
