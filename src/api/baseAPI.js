import axios from "axios";

// Create an Axios instance
const baseAPI = axios.create({
  baseURL: "https://nodejs-x.vercel.app/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Error Handler Function
const handleError = (error) => {
  if (error.response) {
    // HTTP error responses
    const { status, data } = error.response;
    console.error(`Error ${status}:`, data.message || data);

    switch (status) {
      case 400:
        console.error("Bad Request - Check your input");
        break;
      case 404:
        console.error("Not Found - Check the endpoint");
        break;
      case 500:
        console.error("Internal Server Error - Try again later");
        break;
      default:
        console.error("Unhandled HTTP error:", status);
    }
  } else if (error.request) {
    // No response received from the server
    console.error("No response received from the server. Check your network connection.");
  } else {
    // Other errors (e.g., setup issues)
    console.error("Error setting up the request:", error.message);
  }

  // Optionally, return a specific error structure
  return Promise.reject(error);
};

// Add a request interceptor
baseAPI.interceptors.request.use(
  (config) => {
    // Add any common configuration modifications if necessary
    return config;
  },
  (error) => {
    // Handle request errors
    return handleError(error);
  }
);

// Add a response interceptor
baseAPI.interceptors.response.use(
  (response) => {
    // Handle responses (e.g., extract data)
    return response.data;
  },
  (error) => {
    // Handle response errors
    return handleError(error);
  }
);

export default baseAPI;
