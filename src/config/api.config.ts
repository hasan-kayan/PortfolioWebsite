// API Configuration
// Handles both development (with Vite proxy) and production (direct backend URL)

const getApiBaseUrl = (): string => {
  // In production, use the backend URL from environment variable
  if (import.meta.env.PROD) {
    // Check for environment variable first
    const envUrl = import.meta.env.VITE_API_BASE_URL;
    if (envUrl) {
      // Remove trailing slash if present
      return envUrl.replace(/\/$/, '');
    }
    // Fallback to default backend URL
    return 'https://portfoliobackend-311015061542.europe-west1.run.app';
  }
  
  // In development, use relative path (Vite proxy will handle it)
  return '';
};

export const API_BASE_URL = getApiBaseUrl();

// Log API base URL in development for debugging
if (import.meta.env.DEV) {
  console.log('🔧 API Base URL (dev): Using Vite proxy');
} else {
  console.log('🌐 API Base URL (prod):', API_BASE_URL);
}

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

