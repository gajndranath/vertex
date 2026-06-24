export const checkAuthStatus = async () => {
  // Mock logic: checks if 'access_token' cookie exists.
  // In a real scenario, we might decode it or call a /me endpoint
  if (typeof document !== 'undefined') {
    return document.cookie.includes('access_token');
  }
  return false;
};
