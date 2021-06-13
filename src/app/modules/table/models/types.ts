import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export interface Dictionary {
  [key: string]: any
}

export enum COL_DATA_TYPE {
  TEXT,
  NUMBER,
  CURRENCY,
  DATE
}

export type SortOrder = NzTableSortOrder;
export type SortFunc = NzTableSortFn;
