// src/apiService.ts
const BASE_URL = 'https://tmp-se-project.azurewebsites.net/api';

async function handleResponse(response: Response) {
  const data = await response.json();
  if (!response.ok) {
    const message = data.message || response.statusText; // Try to extract message from response body
    throw new Error(message);
  }
  return data;
}

interface AdminSignupPayload {
  email: string;
  password: string;
  name: string;
}

interface AdminLoginPayload {
  email: string;
  password: string;
}

export const apiService = {
  admin: {
    signup: async (payload: AdminSignupPayload) => {
      const response = await fetch(`${BASE_URL}/admin/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    login: async (payload: AdminLoginPayload) => {
      const response = await fetch(`${BASE_URL}/admin/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    logout: async (token: string) => {
      const response = await fetch(`${BASE_URL}/admin/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      return handleResponse(response);
    },
  },
  // ... other APIs (user, learners, courses, etc.)
};