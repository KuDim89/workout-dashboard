import axios from 'axios';
import _ from 'lodash';
import { type IGoogleSheet } from '../../models/IGoogleSheet';
import { transformGoogleSheetsData } from '../../utils/responseData/transformData';

export enum SheetTitleType {
  STREET = 'street',
  HOME = 'home',
}

class GoogleSheetsService {
  private readonly baseUrl = `${process.env.REACT_APP_GOOGLESHEETS_URL}/d/${process.env.REACT_APP_SHEET_ID_KEY}/gviz/tq?sheet=`;

  async getDataFromGoogleSheet(sheetTitle: SheetTitleType) {
    const formattedTitle = _.startCase(_.camelCase(sheetTitle)).trim();

    try {
      const response = await axios.get<string>(
        `${this.baseUrl}${formattedTitle}`,
      );
      if (response.status === 200) {
        const formattedData: IGoogleSheet = JSON.parse(
          response.data.substring(47).slice(0, -2),
        );
        return transformGoogleSheetsData(formattedData.table.rows);
      }
    } catch (e) {
      return e;
    }
  }
}

export default new GoogleSheetsService();
