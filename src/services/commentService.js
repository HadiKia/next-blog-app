import http from "./httpService";

export async function createCommentApi(data, options) {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}

export async function getAllCommentsApi(options = {}) {
  return http.get("/comment/list", options).then(({ data }) => data.data);
}

export async function deleteCommentApi(id, options = {}) {
  await new Promise((res) => setTimeout(() => res(), 5000));
  return http
    .delete(`/comment/remove/${id}`, options)
    .then(({ data }) => data.data);
}
