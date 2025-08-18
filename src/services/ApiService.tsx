import axios from "axios";
import { useAuth } from "../context/AuthContext";

export const ApiService = () => {
  const { token } = useAuth();

  const api = axios.create({
    baseURL: "https://zencura-dev-api.xminds.com/v1",
    timeout: 10000,
  });

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("➡️ Request:", config.method?.toUpperCase(), config.url, config.data);
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      console.log("✅ Response:", response);
      return response;
    },
    (error) => {
      console.error("❌ API Error:", error.response?.data || error.message);
      return Promise.reject(error);
    }
  );

  return api;
};
