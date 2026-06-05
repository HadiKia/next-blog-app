import type { ID, ISODateString } from "./api";

export type Category = {
  _id: ID;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type CategoryInput = {
  title: string;
  englishTitle: string;
  description: string;
};

export type CategoryListResponse = {
  categories: Category[];
};

export type CategoryResponse = {
  category: Category;
};
