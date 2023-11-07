interface ITableColumn {
  id: string;
  label: string;
  type: string;
  pattern: string;
}

interface ITableCell {
  v: number;
  f: string;
}

interface ITableRow {
  c: ITableCell[];
}

interface ITable {
  cols: ITableColumn[];
  rows: ITableRow[];
  parsedNumHeaders: number;
}

export interface ISheetData {
  version: string;
  reqId: string;
  status: string;
  sig: string;
  table: ITable;
}

export enum SheetTitleType {
  Street = "street",
  Home = "home",
}
