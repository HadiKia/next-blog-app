import http from "./httpService";
import type {
  ApiDataResponse,
  ApiMessageResponse,
  EditPostInput,
  ID,
  Post,
  PostInteractionResponse,
  PostListResponse,
  PostResponse,
} from "@/types";
import type { AxiosRequestConfig } from "axios";

type RequestConfig = RequestInit | AxiosRequestConfig;

export const getPostBySlug = async (
  slug: string,
  options?: RequestInit,
): Promise<Post | undefined> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`,
    options,
  );
  const { data } = (await res.json()) as ApiDataResponse<PostResponse>;
  const { post } = data || {};
  return post;
};

export const getPosts = async (
  queries = "",
  options?: RequestInit,
): Promise<PostListResponse> => {
  const queryString = queries ? `?${queries}` : "";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list${queryString}`,
    options,
  );
  const { data } = (await res.json()) as ApiDataResponse<PostListResponse>;
  const { posts = [], totalPages } = data || {};
  return { posts, totalPages };
};

export async function likePostApi(
  postId: ID,
): Promise<PostInteractionResponse> {
  return http
    .post<ApiDataResponse<PostInteractionResponse>>(`/post/like/${postId}`)
    .then(({ data }) => data.data);
}

export async function bookmarkPostApi(
  postId: ID,
): Promise<PostInteractionResponse> {
  return http
    .post<ApiDataResponse<PostInteractionResponse>>(`/post/bookmark/${postId}`)
    .then(({ data }) => data.data);
}

export async function getPostsByIds(ids?: ID[]): Promise<Post[]> {
  if (!ids || !Array.isArray(ids) || ids.length === 0) return [];
  const res = await http
    .post<ApiDataResponse<PostListResponse>>("/post/list-by-ids", { ids })
    .then(({ data }) => data.data.posts);
  return res;
}

export async function createPostApi(data: FormData): Promise<PostResponse> {
  return http
    .post<ApiDataResponse<PostResponse>>(`/post/create`, data)
    .then(({ data }) => data.data);
}

export async function editPostApi({
  id,
  data,
}: EditPostInput): Promise<PostResponse> {
  return http
    .patch<ApiDataResponse<PostResponse>>(`/post/update/${id}`, data)
    .then(({ data }) => data.data);
}

export async function getPostById(id: ID): Promise<PostResponse> {
  return http
    .get<ApiDataResponse<PostResponse>>(`/post/${id}`)
    .then(({ data }) => data.data);
}

export async function deletePostApi(
  id: ID,
  options?: RequestConfig,
): Promise<ApiMessageResponse> {
  return http
    .delete<ApiDataResponse<ApiMessageResponse>>(
      `/post/remove/${id}`,
      options as AxiosRequestConfig,
    )
    .then(({ data }) => data.data);
}
