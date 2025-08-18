import axios from "axios";

const api = axios.create({
  baseURL: "https://zencura-dev-api.xminds.com/v1", // staging API base
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MTkyNzNlNi1kOTQzLTQzMzAtODgxNy0yNmMzNDU1NjMwZGUiLCJpYXQiOjE3NTU1MDY1OTEsImV4cCI6MTc1ODA5ODU5MX0.PrsLtSRWVizwwTejhL0zX1KjuRANg63D5FguQ65Z9NdrYgj9As-sI07ZCcynv3m8w49o4HMYDjrp37oFC_3TjA"; // or Redux/Zustand
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("➡️ Request:", config.method?.toUpperCase(), config.url, config.data);
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor
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

export default api;
