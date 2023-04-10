import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL;

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

// Add a request interceptor to include the authorization token in headers
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
