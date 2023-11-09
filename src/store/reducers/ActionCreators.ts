import { type AppDispatch } from "../store";
import { streetSlice } from "./StreetSlice";
import GoogleSheetsService from "../../sevices/googleSheets/googleSheets.service";
import { type ITableRow } from "../../models/IGoogleSheet";
import { type AxiosError } from "axios";

export const fetchStreet = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(streetSlice.actions.streetFetching());
    const response = (await GoogleSheetsService.getDataFromGoogleSheet(
      "street",
    )) as ITableRow[];
    dispatch(streetSlice.actions.streetFetchingSuccess(response));
  } catch (e) {
    dispatch(
      streetSlice.actions.streetFetchingError((e as AxiosError).message),
    );
  }
};
