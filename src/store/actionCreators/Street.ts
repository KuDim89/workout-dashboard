import { type AppDispatch } from "../index";
import { streetSlice } from "../slices/StreetSlice";
import GoogleSheetsService from "../../sevices/googleSheets/googleSheets.service";
import { type ITableRow } from "../../models/IGoogleSheet";
import { type AxiosError } from "axios";
import { SheetTitleType } from "../../sevices/googleSheets/interfaces";

export const fetchStreet = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(streetSlice.actions.streetFetching());
    const response = (await GoogleSheetsService.getDataFromGoogleSheet(
      SheetTitleType.Street,
    )) as ITableRow[];
    dispatch(streetSlice.actions.streetFetchingSuccess(response));
  } catch (e) {
    dispatch(
      streetSlice.actions.streetFetchingError((e as AxiosError).message),
    );
  }
};
