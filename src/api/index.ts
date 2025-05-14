import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 seconds timeout for requests
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      } catch (error) {
        console.error("Error parsing token:", error);
        localStorage.removeItem("accessToken");
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized errors
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      localStorage.removeItem("attachedBuisness");
      window.location.href = "/signin";
    }

    // Network errors
    if (!error.response) {
      console.error("Network Error:", error);
      // You could dispatch to an error tracking service here
    }

    return Promise.reject(error);
  },
);

export default api;
