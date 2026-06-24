// Using fetch API as a lightweight alternative to axios for basic needs
export const fetchApi = async (endpoint: string, options: RequestInit = {}) => {
  // Fallback to local API if NEXT_PUBLIC_API_URL is not set
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
};

export const getBlogs = () => fetchApi('/blogs');
export const getBlogBySlug = (slug: string) => fetchApi(`/blogs/${slug}`);
export const getFaqs = () => fetchApi('/faqs');

// Admin Auth & Team
export const signupAdmin = (data: any) => fetchApi('/admin/signup', { method: 'POST', body: JSON.stringify(data) });
export const getTeamMembers = () => fetchApi('/admin/members');
export const addTeamMember = (data: any) => fetchApi('/admin/members', { method: 'POST', body: JSON.stringify(data) });
export const deleteTeamMember = (id: string) => fetchApi(`/admin/members/${id}`, { method: 'DELETE' });
