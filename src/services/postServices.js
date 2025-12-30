import http from "./httpService";

export const getPostBySlug = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
};

export const getPosts = async (queries, options) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options
  );
  const { data } = await res.json();
  const { posts, totalPages } = data || {};
  return { posts, totalPages };
};

export async function likePostApi(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function getPostsByIds(ids) {
  if (!ids || !Array.isArray(ids) || ids.length === 0) return [];
  const res = await http
    .post("/post/list-by-ids", { ids })
    .then(({ data }) => data.data.posts);
  return res;
}

export async function createPostApi(data) {
  return http.post(`/post/create`, data).then(({ data }) => data.data);
}

export async function editPostApi({ id, data }) {
  return http.patch(`/post/update/${id}`, data).then(({ data }) => data.data);
}

export async function getPostById(id) {
  return http.get(`/post/${id}`).then(({ data }) => data.data);
}

export async function deletePostApi(id, options) {
  return http
    .delete(`/post/remove/${id}`, options)
    .then(({ data }) => data.data);
}
