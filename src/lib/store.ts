import { create } from "zustand";

interface SidebarStore {
  isExpanded: boolean;
  toggleSidebar: () => void;
  setSidebarExpanded: (expanded: boolean) => void;
}

interface ContactsStore {
  isExpanded: boolean;
  toggleContacts: () => void;
  setContactsExpanded: (expanded: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isExpanded: true,
  toggleSidebar: () => set((state) => ({ isExpanded: !state.isExpanded })),
  setSidebarExpanded: (expanded: boolean) => set({ isExpanded: expanded }),
}));

export const useContactsStore = create<ContactsStore>((set) => ({
  isExpanded: true,
  toggleContacts: () => set((state) => ({ isExpanded: !state.isExpanded })),
  setContactsExpanded: (expanded: boolean) => set({ isExpanded: expanded }),
}));
