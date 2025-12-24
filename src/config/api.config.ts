// API Configuration
// Handles both development (with Vite proxy) and production (direct backend URL)

const getApiBaseUrl = (): string => {
  // In production, use the backend URL from environment variable
  if (import.meta.env.PROD) {
    return import.meta.env.VITE_API_BASE_URL || 'https://portfoliobackend-311015061542.europe-west1.run.app';
  }
  
  // In development, use relative path (Vite proxy will handle it)
  return '';
};

export const API_BASE_URL = getApiBaseUrl();

// Helper function to build API endpoints
export const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  
  if (import.meta.env.PROD) {
    // Production: use full URL
    return `${API_BASE_URL}/${cleanEndpoint}`;
  }
  
  // Development: use relative path (Vite proxy)
  return `/${cleanEndpoint}`;
};

