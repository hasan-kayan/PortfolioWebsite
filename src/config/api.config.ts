// API Configuration
// Handles both development (with Vite proxy) and production (direct backend URL)

const getApiBaseUrl = (): string => {
  // In production, use relative paths (Firebase Hosting rewrites will handle it)
  // This way backend and frontend run on the same domain
  if (import.meta.env.PROD) {
    // Use relative path - Firebase Hosting rewrites will route /api/** to Functions
    return '';
  }
  
  // In development, use relative path (Vite proxy will handle it)
  return '';
};

export const API_BASE_URL = getApiBaseUrl();

// Log API base URL in development for debugging
if (import.meta.env.DEV) {
  console.log('🔧 API Base URL (dev): Using Vite proxy');
} else {
  console.log('🌐 API Base URL (prod): Using relative paths (Firebase Hosting rewrites)');
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

