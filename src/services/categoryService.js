import http from "./httpService";

export async function getCategoryApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}

export async function deleteCategoryApi(id, options = {}) {
  return http
    .delete(`/category/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function createCategoryApi(data, options) {
  return http
    .post("/category/add", data, options)
    .then(({ data }) => data.data);
}

const categoryApi = {
  getCategoryApi,
};

export default categoryApi;
