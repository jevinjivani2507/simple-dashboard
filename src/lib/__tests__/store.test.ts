import { renderHook, act } from "@testing-library/react";
import { useSidebarStore, useContactsStore, useThemeStore } from "../store";

describe("Zustand Stores", () => {
  describe("useSidebarStore", () => {
    beforeEach(() => {
      // Reset the store state before each test
      const { result } = renderHook(() => useSidebarStore());
      act(() => {
        result.current.setSidebarExpanded(false);
      });
    });

    it("should initialize with isExpanded false", () => {
      const { result } = renderHook(() => useSidebarStore());
      expect(result.current.isExpanded).toBe(false);
    });

    it("should toggle sidebar state", () => {
      const { result } = renderHook(() => useSidebarStore());

      act(() => {
        result.current.toggleSidebar();
      });

      expect(result.current.isExpanded).toBe(true);

      act(() => {
        result.current.toggleSidebar();
      });

      expect(result.current.isExpanded).toBe(false);
    });

    it("should set sidebar expanded state directly", () => {
      const { result } = renderHook(() => useSidebarStore());

      act(() => {
        result.current.setSidebarExpanded(true);
      });

      expect(result.current.isExpanded).toBe(true);

      act(() => {
        result.current.setSidebarExpanded(false);
      });

      expect(result.current.isExpanded).toBe(false);
    });

    it("should maintain state across multiple toggles", () => {
      const { result } = renderHook(() => useSidebarStore());

      act(() => {
        result.current.toggleSidebar();
        result.current.toggleSidebar();
        result.current.toggleSidebar();
      });

      expect(result.current.isExpanded).toBe(true);
    });

    it("should have all required properties", () => {
      const { result } = renderHook(() => useSidebarStore());

      expect(result.current).toHaveProperty("isExpanded");
      expect(result.current).toHaveProperty("toggleSidebar");
      expect(result.current).toHaveProperty("setSidebarExpanded");
      expect(typeof result.current.isExpanded).toBe("boolean");
      expect(typeof result.current.toggleSidebar).toBe("function");
      expect(typeof result.current.setSidebarExpanded).toBe("function");
    });
  });

  describe("useContactsStore", () => {
    beforeEach(() => {
      const { result } = renderHook(() => useContactsStore());
      act(() => {
        result.current.setContactsExpanded(false);
      });
    });

    it("should initialize with isExpanded false", () => {
      const { result } = renderHook(() => useContactsStore());
      expect(result.current.isExpanded).toBe(false);
    });

    it("should toggle contacts state", () => {
      const { result } = renderHook(() => useContactsStore());

      act(() => {
        result.current.toggleContacts();
      });

      expect(result.current.isExpanded).toBe(true);

      act(() => {
        result.current.toggleContacts();
      });

      expect(result.current.isExpanded).toBe(false);
    });

    it("should set contacts expanded state directly", () => {
      const { result } = renderHook(() => useContactsStore());

      act(() => {
        result.current.setContactsExpanded(true);
      });

      expect(result.current.isExpanded).toBe(true);

      act(() => {
        result.current.setContactsExpanded(false);
      });

      expect(result.current.isExpanded).toBe(false);
    });

    it("should have all required properties", () => {
      const { result } = renderHook(() => useContactsStore());

      expect(result.current).toHaveProperty("isExpanded");
      expect(result.current).toHaveProperty("toggleContacts");
      expect(result.current).toHaveProperty("setContactsExpanded");
    });
  });

  describe("useThemeStore", () => {
    beforeEach(() => {
      localStorage.clear();
      jest.clearAllMocks();
    });

    it("should initialize with light theme", () => {
      const { result } = renderHook(() => useThemeStore());
      expect(result.current.theme).toBe("light");
    });

    it("should toggle theme between light and dark", () => {
      const { result } = renderHook(() => useThemeStore());

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.theme).toBe("dark");

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.theme).toBe("light");
    });

    it("should set theme directly", () => {
      const { result } = renderHook(() => useThemeStore());

      act(() => {
        result.current.setTheme("dark");
      });

      expect(result.current.theme).toBe("dark");

      act(() => {
        result.current.setTheme("light");
      });

      expect(result.current.theme).toBe("light");
    });

    it("should persist theme to localStorage", () => {
      const { result } = renderHook(() => useThemeStore());
      const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

      act(() => {
        result.current.setTheme("dark");
      });

      // Check that localStorage.setItem was called
      expect(setItemSpy).toHaveBeenCalled();
      setItemSpy.mockRestore();
    });

    it("should have all required properties", () => {
      const { result } = renderHook(() => useThemeStore());

      expect(result.current).toHaveProperty("theme");
      expect(result.current).toHaveProperty("toggleTheme");
      expect(result.current).toHaveProperty("setTheme");
      expect(["light", "dark"]).toContain(result.current.theme);
    });

    it("should handle multiple theme changes", () => {
      const { result } = renderHook(() => useThemeStore());

      act(() => {
        result.current.toggleTheme();
        result.current.toggleTheme();
        result.current.setTheme("dark");
      });

      expect(result.current.theme).toBe("dark");
    });
  });
});
