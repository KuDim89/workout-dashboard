import axios from "axios";
import _ from "lodash";
import { type ISheetData } from "./interfaces";

class GoogleSheetsService {
  private readonly baseUrl = `https://docs.google.com/spreadsheets/d/${process.env.REACT_APP_SHEET_ID_KEY}/gviz/tq?sheet=`;

  async getDataFromGoogleSheet(
    sheetTitle: string,
  ): Promise<ISheetData | undefined> {
    const formattedTitle = _.startCase(_.camelCase(sheetTitle)).trim();

    try {
      const response = await axios.get(`${this.baseUrl}${formattedTitle}`);
      if (response.status === 200) {
        return JSON.parse(
          response.data.substring(47).slice(0, -2),
        ) as ISheetData;
      }
    } catch (error) {
      console.error(
        `Error fetching Google Sheet ${formattedTitle} data:`,
        error,
      );
      throw error;
    }
  }
}

export default new GoogleSheetsService();
