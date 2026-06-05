export type ID = string;
export type ISODateString = string;

export type Nullable<T> = T | null;

export type ApiMessageResponse = {
  message: string;
};

export type ApiDataResponse<T> = {
  data: T;
  message?: string;
  statusCode?: number;
};

export type ApiErrorResponse = {
  message: string;
  statusCode?: number;
};

export type SelectOption<TValue = string> = {
  id?: string | number;
  label: string;
  value: TValue;
};

export type BadgeStyle = {
  label: string;
  className: string;
};

export type ServerActionState = {
  error: string;
  message: string;
};

export type ServiceOptions = {
  headers?: HeadersInit;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};
