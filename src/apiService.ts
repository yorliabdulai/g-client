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

interface AdminLoginPayload {
  email: string;
  password: string;
}
interface AdminSignupPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  contact: string;
}
 interface AdminVerifyEmailPayload {
  email: string;
  token: string;
}

export const apiService = {
  admin: {
    signup: async (payload: AdminSignupPayload) => {
      const response = await fetch(`${BASE_URL}/admin/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response)
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
    verifyEmail: async (payload: AdminVerifyEmailPayload) => {
      const response = await fetch(`${BASE_URL}/admin/auth/verify-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    forgotPassword: async (payload: { email: string }) => {
      const response = await fetch(`${BASE_URL}/admin/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    resetPassword: async (token: string, payload: { password: string }) => {
      const response = await fetch(`${BASE_URL}/admin/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    updateAdminDetails: async (token: string, payload: { first_name: string; last_name: string; email: string; contact: string }) => {
      const response = await fetch(`${BASE_URL}/admin/auth/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    checkAuth: async (token: string) => {
      const response = await fetch(`${BASE_URL}/admin/auth/check-auth`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      return handleResponse(response);
    },
    learners: {
        createLearner: async (token: string, payload: {
          firstname: string;
          lastname: string;
          email: string;
          course: string;
          gender: string;
          location: string;
          phone: string;
          disability: string;
          image: string;
          description: string;
          amount: number;
        }) => {
          const response = await fetch(`${BASE_URL}/learners`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          });
          return handleResponse(response);
        },
        getAllLearners: async (token: string) => {
          const response = await fetch(`${BASE_URL}/learners`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
          });
          return handleResponse(response);
        },
        getLearnerById: async (token: string, id: string) => {
          const response = await fetch(`${BASE_URL}/learners/${id}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
          });
          return handleResponse(response);
        },
        updateLearnerById: async (token: string, id: string, payload: {
          firstname: string;
          lastname: string;
          email: string;
          course: string;
          gender: string;
          location: string;
          phone: string;
          disability: string;
          image: string;
          description: string;
          amount: number;
        }) => {
          const response = await fetch(`${BASE_URL}/learners/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
          });
          return handleResponse(response);
        },
        deleteLearnerById: async (token: string, id: string) => {
          const response = await fetch(`${BASE_URL}/learners/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` },
          });
          return handleResponse(response);
        },
      },
    courses: {
      createCourse: async (token: string, payload: { title: string; description: string; duration: string; price: number }) => {
        const response = await fetch(`${BASE_URL}/courses`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
        return handleResponse(response);
      },
      getCourses: async (token: string) => {
        const response = await fetch(`${BASE_URL}/courses`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        return handleResponse(response);
      },
      getCourseById: async (token: string, id: string) => {
        const response = await fetch(`${BASE_URL}/courses/${id}`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        return handleResponse(response);
      },
      updateCourseById: async (token: string, id: string, payload: { title: string; description: string; duration: string; price: number }) => {
        const response = await fetch(`${BASE_URL}/courses/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
        return handleResponse(response);
      },
      deleteCourseById: async (token: string, id: string) => {
        const response = await fetch(`${BASE_URL}/courses/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        return handleResponse(response);
      },
    },
    invoice: {
      createInvoice: async (token: string, payload: { learnerId: string; amount: number; description: string; dueDate: string }) => {
        const response = await fetch(`${BASE_URL}/invoices`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
        return handleResponse(response);
      },
      getAllInvoices: async (token: string) => {
        const response = await fetch(`${BASE_URL}/invoices`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        return handleResponse(response);
      },
      getInvoiceById: async (token: string, id: string) => {
        const response = await fetch(`${BASE_URL}/invoices/${id}`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        return handleResponse(response);
      },
      updateInvoiceById: async (token: string, id: string, payload: { learnerId: string; amount: number; description: string; dueDate: string }) => {
        const response = await fetch(`${BASE_URL}/invoices/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
        return handleResponse(response);
      },
      deleteInvoiceById: async (token: string, id: string) => {
        const response = await fetch(`${BASE_URL}/invoices/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` },
        });
        return handleResponse(response);
      },
    },
    
  },
  user: {
    signup: async (payload: { username: string; email: string; password: string }) => {
      const response = await fetch(`${BASE_URL}/user/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    login: async (payload: { email: string; password: string }) => {
      const response = await fetch(`${BASE_URL}/user/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    logout: async (token: string) => {
      const response = await fetch(`${BASE_URL}/user/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      return handleResponse(response);
    },
    verifyEmail: async (payload: { email: string; token: string }) => {
      const response = await fetch(`${BASE_URL}/user/auth/verify-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    forgotPassword: async (payload: { email: string }) => {
      const response = await fetch(`${BASE_URL}/user/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    resetPassword: async (token: string, payload: { password: string }) => {
      const response = await fetch(`${BASE_URL}/user/auth/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return handleResponse(response);
    },
    } 
};