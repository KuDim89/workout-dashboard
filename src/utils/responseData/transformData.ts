import { type ITableRow } from '../../models/IGoogleSheet';
import {
  type IExercisesData,
  type ITransformedGoogleSheetsData,
} from '../../models/ITransformedGoogleSheetsData';

export function transformGoogleSheetsData(
  sheetData: ITableRow[],
): ITransformedGoogleSheetsData[] {
  const headers = sheetData[0].c.map((item) => item.v);

  const transformedGoogleSheetData: ITransformedGoogleSheetsData[] = [];

  sheetData.forEach((item) => {
    const date = item.c[0].v;
    const exercises: IExercisesData[] = [];

    for (let i = 1; i < headers.length; i++) {
      exercises.push({
        name: headers[i],
        amount: item.c[i].v,
      });
    }

    transformedGoogleSheetData.push({ date, exercises });
  });

  transformedGoogleSheetData.shift();

  return transformedGoogleSheetData;
}
