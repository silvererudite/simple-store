import Axios from "axios";

const service = Axios.create({
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
});

const serviceNoHeader = Axios.create({
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
});

/* eslint-disable no-param-reassign */
service.interceptors.request.use((request) => {
  const token = window.localStorage.getItem("refresh_token");
  const session_token = window.localStorage.getItem("access_token");

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  if (session_token && session_token.length > 0) {
    request.headers["token"] = `${session_token}`;
  }
  return request;
});

service.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.log("http error", error);
    return Promise.reject(error.status ? error : error.response);
  }
);

function access(url, param, method, realParam = {}) {
  param = param || {};
  // if (window.location.search.indexOf('debug') > -1) {
  //   param.debug = true;
  // }

  let ret = null;
  const upperMethod = method.toUpperCase();

  if (upperMethod === "POST") {
    ret = service.post(url, param, { ...realParam });
  } else if (upperMethod === "PUT") {
    ret = service.put(url, param, { ...realParam });
  } else if (upperMethod === "DELETE") {
    ret = service.delete(url, { ...param });
  } else {
    ret = service.get(url, { params: { ...param }, ...realParam });
  }

  return new Promise((resolve, reject) => {
    ret.then((res) => resolve(res)).catch((err) => reject(err));
  });
}

export default {
  getNoHeader(url, param) {
    return serviceNoHeader.get(url, { headers: { ...param } });
  },
  postNoHeader(url, body, param = {}) {
    return serviceNoHeader.post(url, body, { headers: { ...param } });
  },
  get(url, param, realParam = {}) {
    return access(url, param, "get", realParam);
  },
  delete(url, param, realParam = {}) {
    return access(url, param, "delete", realParam);
  },
  post(url, param, realParam = {}) {
    return access(url, param, "post", realParam);
  },
  put(url, param, realParam = {}) {
    return access(url, param, "put", realParam);
  },
};
