import http from "./httpService";

export async function signupApi(data) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}

export async function signinApi(data) {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export async function getAllUsersApi(option) {
  return http.get("/user/list", option).then(({ data }) => data.data);
}

export async function deleteUserApi(id, options = {}) {
  return http
    .delete(`/user/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function editUserApi({ id, data }) {
  return http.patch(`/user/update/${id}`, data).then(({ data }) => data.data);
}

export function logoutApi() {
  return http.post(`/user/logout`);
}
