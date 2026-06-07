import http from "./httpService";
import type {
  ApiDataResponse,
  ApiMessageResponse,
  CommentListResponse,
  CreateCommentInput,
  ID,
  ServiceRequestConfig,
  UpdateCommentInput,
} from "@/types";
import type { AxiosRequestConfig } from "axios";

export async function createCommentApi(
  data: CreateCommentInput | FormData,
  options?: ServiceRequestConfig,
): Promise<ApiMessageResponse> {
  return http
    .post<
      ApiDataResponse<ApiMessageResponse>
    >("/comment/add", data, options as AxiosRequestConfig)
    .then(({ data }) => data.data);
}

export async function getAllCommentsApi(
  options: ServiceRequestConfig = {},
): Promise<CommentListResponse> {
  return http
    .get<
      ApiDataResponse<CommentListResponse>
    >("/comment/list", options as AxiosRequestConfig)
    .then(({ data }) => data.data);
}

export async function deleteCommentApi(
  id: ID,
  options: ServiceRequestConfig = {},
): Promise<ApiMessageResponse> {
  return http
    .delete<
      ApiDataResponse<ApiMessageResponse>
    >(`/comment/remove/${id}`, options as AxiosRequestConfig)
    .then(({ data }) => data.data);
}

export async function updateCommentApi(
  { id, data }: UpdateCommentInput,
  options: ServiceRequestConfig = {},
): Promise<ApiMessageResponse> {
  return http
    .patch<
      ApiDataResponse<ApiMessageResponse>
    >(`/comment/update/${id}`, data, options as AxiosRequestConfig)
    .then(({ data }) => data.data);
}
