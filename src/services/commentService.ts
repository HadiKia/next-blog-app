import http from "./httpService";
import type {
  ApiDataResponse,
  ApiMessageResponse,
  CommentListResponse,
  CreateCommentInput,
  ID,
  UpdateCommentInput,
} from "@/types";
import type { AxiosRequestConfig } from "axios";

type RequestConfig = RequestInit | AxiosRequestConfig;

export async function createCommentApi(
  data: CreateCommentInput | FormData,
  options?: RequestConfig,
): Promise<ApiMessageResponse> {
  return http
    .post<ApiDataResponse<ApiMessageResponse>>(
      "/comment/add",
      data,
      options as AxiosRequestConfig,
    )
    .then(({ data }) => data.data);
}

export async function getAllCommentsApi(
  options: RequestConfig = {},
): Promise<CommentListResponse> {
  return http
    .get<ApiDataResponse<CommentListResponse>>(
      "/comment/list",
      options as AxiosRequestConfig,
    )
    .then(({ data }) => data.data);
}

export async function deleteCommentApi(
  id: ID,
  options: RequestConfig = {},
): Promise<ApiMessageResponse> {
  return http
    .delete<ApiDataResponse<ApiMessageResponse>>(
      `/comment/remove/${id}`,
      options as AxiosRequestConfig,
    )
    .then(({ data }) => data.data);
}

export async function updateCommentApi(
  { id, data }: UpdateCommentInput,
  options: RequestConfig = {},
): Promise<ApiMessageResponse> {
  return http
    .patch<ApiDataResponse<ApiMessageResponse>>(
      `/comment/update/${id}`,
      data,
      options as AxiosRequestConfig,
    )
    .then(({ data }) => data.data);
}
