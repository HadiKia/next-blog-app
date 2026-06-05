export type ID = string;
export type ISODateString = string;

export type ApiMessageResponse = {
  message: string;
};

export type ApiDataResponse<T> = {
  data: T;
  message?: string;
};

export type ApiErrorResponse = {
  message: string;
};

export type SelectOption<TValue = string> = {
  id?: string | number;
  label: string;
  value: TValue;
};

export type ServerActionState = {
  error: string;
  message: string;
};
