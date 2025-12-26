// API Configuration
// Handles both development (with Vite proxy) and production (Cloud Run backend URL)

const getApiBaseUrl = (): string => {
  // Check for explicit API URL in environment (for Cloud Run)
  const envApiUrl = import.meta.env.VITE_API_BASE_URL;
  
  if (envApiUrl) {
    // Remove trailing slash if present
    return envApiUrl.replace(/\/$/, '');
  }
  
  // In production without explicit URL, use relative paths (Firebase Hosting rewrites)
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
  if (import.meta.env.VITE_API_BASE_URL) {
    console.log(`🌐 API Base URL (prod): ${API_BASE_URL} (Cloud Run)`);
  } else {
    console.log('🌐 API Base URL (prod): Using relative paths (Firebase Hosting rewrites)');
  }
}

// Helper function to build API endpoints
export const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  
  if (API_BASE_URL) {
    // Production with explicit URL: use full URL
    return `${API_BASE_URL}/${cleanEndpoint}`;
  }
  
  // Development or production without explicit URL: use relative path
  return `/${cleanEndpoint}`;
};

