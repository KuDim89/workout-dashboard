import { type AxiosError } from 'axios';

import { type AppDispatch } from '../../index';
import GoogleSheetsService from '../../../services/googleSheets/googleSheets.service';
import { SheetTitleType } from '../../../services/googleSheets/constants';
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
    // todo: should define types for 'event'
  } catch (e) {
    dispatch(
      streetFetchingError({
        code: (e as AxiosError).code,
        message: (e as AxiosError).message,
      }),
    );
  }
};
