import { type AppDispatch } from "../store";
import { homeSlice } from "../reducers/HomeSlice";
import GoogleSheetsService from "../../sevices/googleSheets/googleSheets.service";
import { type ITableRow } from "../../models/IGoogleSheet";
import { type AxiosError } from "axios";
import { SheetTitleType } from "../../sevices/googleSheets/interfaces";

export const fetchHome = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(homeSlice.actions.homeFetching());
    const response = (await GoogleSheetsService.getDataFromGoogleSheet(
      SheetTitleType.Home,
    )) as ITableRow[];
    dispatch(homeSlice.actions.homeFetchingSuccess(response));
  } catch (e) {
    dispatch(homeSlice.actions.homeFetchingError((e as AxiosError).message));
  }
};
