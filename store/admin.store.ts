import { create } from 'zustand';

interface AdminState {
  currentTab: string;
  setTab: (tab: string) => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  currentTab: 'dashboard',
  setTab: (tab) => set({ currentTab: tab }),
}));
