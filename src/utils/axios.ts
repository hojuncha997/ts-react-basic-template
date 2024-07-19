import axios from "axios";

import { HOST_API_KEY } from "../config-global";
import { PATH_AUTH } from "../routes/paths";

const axiosInstance = axios.create({
  baseURL: HOST_API_KEY,
});

const fileInstance = axios.create({
  baseURL: HOST_API_KEY,
  headers: {
    ...axiosInstance.defaults.headers,
    Accept: "application/json;charset=utf-8",
  },
  responseType: "blob",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("accessToken");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // 401 에러 발생 시, 로그인 페이지로 이동
      window.location.href = PATH_AUTH.login;
    }
    return Promise.reject(error);
  }
);

export { axiosInstance as axios, fileInstance as fileAxios };
