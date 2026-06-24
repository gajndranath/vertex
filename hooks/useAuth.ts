import { useAuthStore } from '../store/auth.store';

export const useAuth = () => {
  const { isAuthenticated, user, login, logout } = useAuthStore();
  
  const checkRole = (role: string) => {
    return user?.role === role;
  };

  return { isAuthenticated, user, login, logout, checkRole };
};
