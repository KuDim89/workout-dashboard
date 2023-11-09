import axios from "axios";
import _ from "lodash";
import { type ISheetData } from "./interfaces";

class GoogleSheetsService {
  private readonly baseUrl = `https://docs.google.com/spreadsheets/d/${process.env.REACT_APP_SHEET_ID_KEY}/gviz/tq?sheet=`;

  async getDataFromGoogleSheet(sheetTitle: string) {
    const formattedTitle = _.startCase(_.camelCase(sheetTitle)).trim();

    try {
      const response = await axios.get<string>(
        `${this.baseUrl}${formattedTitle}`,
      );
      if (response.status === 200) {
        const formattedData: ISheetData = JSON.parse(
          response.data.substring(47).slice(0, -2),
        );
        return formattedData.table.rows;
      }
    } catch (error) {
      return error;
    }
  }
}

export default new GoogleSheetsService();
