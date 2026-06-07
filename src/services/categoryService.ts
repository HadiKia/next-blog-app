import http from "./httpService";
import type {
  ApiDataResponse,
  ApiMessageResponse,
  ApiMutationResponse,
  CategoryInput,
  CategoryListResponse,
  CategoryResponse,
  EditCategoryInput,
  ID,
  ServiceRequestConfig,
} from "@/types";

export async function getCategoryApi(): Promise<CategoryListResponse> {
  return http
    .get<ApiDataResponse<CategoryListResponse>>("/category/list")
    .then(({ data }) => data.data);
}

export async function deleteCategoryApi(
  id: ID,
  options: ServiceRequestConfig = {},
): Promise<ApiMessageResponse> {
  return http
    .delete<
      ApiDataResponse<ApiMessageResponse>
    >(`/category/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function createCategoryApi(
  data: CategoryInput,
  options?: ServiceRequestConfig,
): Promise<ApiMutationResponse<CategoryResponse>> {
  return http
    .post<
      ApiDataResponse<ApiMutationResponse<CategoryResponse>>
    >("/category/add", data, options)
    .then(({ data }) => data.data);
}

export async function editCategoryApi({
  id,
  data,
}: EditCategoryInput): Promise<ApiMutationResponse<CategoryResponse>> {
  return http
    .patch<
      ApiDataResponse<ApiMutationResponse<CategoryResponse>>
    >(`/category/update/${id}`, data)
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
