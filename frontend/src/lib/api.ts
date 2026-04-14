export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options?.headers },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export function getAuthHeaders(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const token = localStorage.getItem('admin_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function authFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders(), ...options?.headers },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
