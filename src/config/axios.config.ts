// Axios configuration with base URL for API calls
import axios from 'axios';
import { API_BASE_URL } from './api.config';

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: import.meta.env.PROD ? API_BASE_URL : '',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;

