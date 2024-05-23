interface ITableColumn {
  id: string;
  label: string;
  type: string;
  pattern: string;
}

interface ITableCell {
  v: string;
}

export interface ITableRow {
  c: ITableCell[];
}

interface ITable {
  cols: ITableColumn[];
  rows: ITableRow[];
  parsedNumHeaders: number;
}

export interface IGoogleSheet {
  version: string;
  reqId: string;
  status: string;
  sig: string;
  table: ITable;
}

export enum LoadingDataStatus {
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}
