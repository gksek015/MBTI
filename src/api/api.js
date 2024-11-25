import axios from "axios";

const API = axios.create({
    baseURL: 'https://moneyfulpublicpolicy.co.kr',
    headers: {
        "Content-Type": "application/json",
    }
})

API.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더 추가
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

export default API;