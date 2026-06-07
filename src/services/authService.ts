import http from "./httpService";
import type {
  ApiDataResponse,
  ApiMessageResponse,
  ApiMutationResponse,
  AuthResponse,
  EditUserInput,
  ID,
  ServiceRequestConfig,
  SigninInput,
  SignupInput,
  UserListResponse,
  UserProfileResponse,
} from "@/types";

export async function signupApi(
  data: SignupInput,
): Promise<ApiMutationResponse<AuthResponse>> {
  return http
    .post<
      ApiDataResponse<ApiMutationResponse<AuthResponse>>
    >("/user/signup", data)
    .then(({ data }) => data.data);
}

export async function signinApi(
  data: SigninInput,
): Promise<ApiMutationResponse<AuthResponse>> {
  return http
    .post<
      ApiDataResponse<ApiMutationResponse<AuthResponse>>
    >("/user/signin", data)
    .then(({ data }) => data.data);
}

export async function getUserApi(): Promise<UserProfileResponse> {
  return http
    .get<ApiDataResponse<UserProfileResponse>>("/user/profile")
    .then(({ data }) => data.data);
}

export async function getAllUsersApi(
  option?: ServiceRequestConfig,
): Promise<UserListResponse> {
  return http
    .get<ApiDataResponse<UserListResponse>>("/user/list", option)
    .then(({ data }) => data.data);
}

export async function deleteUserApi(
  id: ID,
  options: ServiceRequestConfig = {},
): Promise<ApiMessageResponse> {
  return http
    .delete<ApiDataResponse<ApiMessageResponse>>(`/user/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function editUserApi({
  id,
  data,
}: EditUserInput): Promise<ApiMutationResponse<UserProfileResponse>> {
  return http
    .patch<
      ApiDataResponse<ApiMutationResponse<UserProfileResponse>>
    >(`/user/update/${id}`, data)
    .then(({ data }) => data.data);
}

export async function logoutApi(): Promise<ApiMessageResponse> {
  return http
    .post<ApiDataResponse<ApiMessageResponse>>(`/user/logout`)
    .then(({ data }) => data.data);
}
