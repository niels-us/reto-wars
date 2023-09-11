export interface IResponse<T> {
  data?: T;
  error?: Error;
  message?: string;
  success?: boolean;
}

export interface IList<T> {
  rows: T[];
  count: number;
}

export interface IEntityId {
  id: number;
}

export interface IRows {
  rows: number;
}

export interface ICount {
  count: number;
}
