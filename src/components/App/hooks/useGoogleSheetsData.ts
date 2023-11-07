import { useEffect, useState } from "react";
import { type ISheetData } from "../../../sevices/googleSheets/interfaces";
import GoogleSheetsService from "../../../sevices/googleSheets/googleSheets.service";

export const useGoogleSheetsData = (
  sheetTitle: string,
): ISheetData | undefined => {
  const [data, setData] = useState<ISheetData | undefined>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const result =
          await GoogleSheetsService.getDataFromGoogleSheet(sheetTitle);
        setData(result);
      } catch (error) {
        console.error("Error in App useEffect:", error);
        throw error;
      }
    };

    void fetchData();
  }, [data]);

  return data;
};
