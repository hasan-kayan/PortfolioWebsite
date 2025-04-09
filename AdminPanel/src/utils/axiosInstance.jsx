import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for handling 401 errors globally
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Logging out...");
      
      // Remove the token
      localStorage.removeItem("token");  // Clear stored token
      sessionStorage.removeItem("token"); // In case it's stored here too

      // Redirect to login page
      window.location.href = "/login"; // Adjust this path based on your app
    }

    return Promise.reject(error); // Return error so individual API calls can handle it too
  }
);

export default axiosInstance;
