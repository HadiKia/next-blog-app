import http from "./httpService";
import type {
  ApiDataResponse,
  ApiMessageResponse,
  CategoryInput,
  CategoryListResponse,
  CategoryResponse,
  EditCategoryInput,
  ID,
} from "@/types";
import type { AxiosRequestConfig } from "axios";

type RequestConfig = RequestInit | AxiosRequestConfig;

export async function getCategoryApi(): Promise<CategoryListResponse> {
  return http
    .get<ApiDataResponse<CategoryListResponse>>("/category/list")
    .then(({ data }) => data.data);
}

export async function deleteCategoryApi(
  id: ID,
  options: RequestConfig = {},
): Promise<ApiMessageResponse> {
  return http
    .delete<ApiDataResponse<ApiMessageResponse>>(
      `/category/remove/${id}`,
      options as AxiosRequestConfig,
    )
    .then(({ data }) => data.data);
}

export async function createCategoryApi(
  data: CategoryInput,
  options?: RequestConfig,
): Promise<CategoryResponse> {
  return http
    .post<ApiDataResponse<CategoryResponse>>(
      "/category/add",
      data,
      options as AxiosRequestConfig,
    )
    .then(({ data }) => data.data);
}

export async function editCategoryApi({
  id,
  data,
}: EditCategoryInput): Promise<CategoryResponse> {
  return http
    .patch<ApiDataResponse<CategoryResponse>>(`/category/update/${id}`, data)
    .then(({ data }) => data.data);
}

export async function getCategoryById(id: ID): Promise<CategoryResponse> {
  return http
    .get<ApiDataResponse<CategoryResponse>>(`/category/${id}`)
    .then(({ data }) => data.data);
}

const categoryApi = {
  getCategoryApi,
};

export default categoryApi;
