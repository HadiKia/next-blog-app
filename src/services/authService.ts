import http from "./httpService";
import type {
  ApiDataResponse,
  ApiMessageResponse,
  AuthResponse,
  EditUserInput,
  ID,
  SigninInput,
  SignupInput,
  UserListResponse,
  UserProfileResponse,
} from "@/types";
import type { AxiosRequestConfig } from "axios";

type RequestConfig = RequestInit | AxiosRequestConfig;

export async function signupApi(data: SignupInput): Promise<AuthResponse> {
  return http
    .post<ApiDataResponse<AuthResponse>>("/user/signup", data)
    .then(({ data }) => data.data);
}

export async function signinApi(data: SigninInput): Promise<AuthResponse> {
  return http
    .post<ApiDataResponse<AuthResponse>>("/user/signin", data)
    .then(({ data }) => data.data);
}

export async function getUserApi(): Promise<UserProfileResponse> {
  return http
    .get<ApiDataResponse<UserProfileResponse>>("/user/profile")
    .then(({ data }) => data.data);
}

export async function getAllUsersApi(
  option?: RequestConfig,
): Promise<UserListResponse> {
  return http
    .get<ApiDataResponse<UserListResponse>>(
      "/user/list",
      option as AxiosRequestConfig,
    )
    .then(({ data }) => data.data);
}

export async function deleteUserApi(
  id: ID,
  options: RequestConfig = {},
): Promise<ApiMessageResponse> {
  return http
    .delete<ApiDataResponse<ApiMessageResponse>>(
      `/user/remove/${id}`,
      options as AxiosRequestConfig,
    )
    .then(({ data }) => data.data);
}

export async function editUserApi({
  id,
  data,
}: EditUserInput): Promise<UserProfileResponse> {
  return http
    .patch<ApiDataResponse<UserProfileResponse>>(`/user/update/${id}`, data)
    .then(({ data }) => data.data);
}

export function logoutApi(): Promise<ApiDataResponse<ApiMessageResponse>> {
  return http.post(`/user/logout`);
}
