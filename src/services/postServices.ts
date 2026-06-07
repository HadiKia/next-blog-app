import http from "./httpService";
import type {
  ApiDataResponse,
  ApiMessageResponse,
  ApiMutationResponse,
  EditPostInput,
  ID,
  Post,
  PostInteractionResponse,
  PostListResponse,
  PostResponse,
  ServiceRequestConfig,
} from "@/types";


// ─────────────────────────────────────────────
// SSR / SSG endpoints
// از native fetch استفاده می‌کنند تا از قابلیت‌های
// کش‌گذاری Next.js (revalidate, cache tags) پشتیبانی شود.
// این توابع فقط در Server Components یا generateStaticParams فراخوانی شوند.
// ─────────────────────────────────────────────

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


// ─────────────────────────────────────────────
// Client-side endpoints
// از axios استفاده می‌کنند — interceptor های auth و
// refresh token خودکار اعمال می‌شوند.
// این توابع فقط در Client Components یا Server Actions فراخوانی شوند.
// ─────────────────────────────────────────────

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

export async function createPostApi(
  data: FormData,
): Promise<ApiMutationResponse<PostResponse>> {
  return http
    .post<
      ApiDataResponse<ApiMutationResponse<PostResponse>>
    >(`/post/create`, data)
    .then(({ data }) => data.data);
}

export async function editPostApi({
  id,
  data,
}: EditPostInput): Promise<ApiMutationResponse<PostResponse>> {
  return http
    .patch<
      ApiDataResponse<ApiMutationResponse<PostResponse>>
    >(`/post/update/${id}`, data)
    .then(({ data }) => data.data);
}

export async function getPostById(id: ID): Promise<PostResponse> {
  return http
    .get<ApiDataResponse<PostResponse>>(`/post/${id}`)
    .then(({ data }) => data.data);
}

export async function deletePostApi(
  id: ID,
  options?: ServiceRequestConfig,
): Promise<ApiMessageResponse> {
  return http
    .delete<ApiDataResponse<ApiMessageResponse>>(`/post/remove/${id}`, options)
    .then(({ data }) => data.data);
}
