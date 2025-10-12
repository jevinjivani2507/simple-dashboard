import { cn, getAverageRgb } from "../utils";

describe("Utils", () => {
  describe("cn", () => {
    it("should merge class names correctly", () => {
      expect(cn("class1", "class2")).toBe("class1 class2");
    });

    it("should handle conditional classes", () => {
      expect(cn("class1", false && "class2", "class3")).toBe("class1 class3");
    });

    it("should merge tailwind classes without duplicates", () => {
      expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
    });

    it("should handle undefined and null", () => {
      expect(cn("class1", undefined, null, "class2")).toBe("class1 class2");
    });

    it("should handle empty strings", () => {
      expect(cn("class1", "", "class2")).toBe("class1 class2");
    });

    it("should handle arrays", () => {
      expect(cn(["class1", "class2"])).toBe("class1 class2");
    });

    it("should handle objects", () => {
      expect(cn({ class1: true, class2: false, class3: true })).toBe(
        "class1 class3",
      );
    });

    it("should merge conflicting tailwind utilities correctly", () => {
      expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
    });
  });

  describe("getAverageRgb", () => {
    it("should return a promise", () => {
      const result = getAverageRgb("test-image.jpg");
      expect(result).toBeInstanceOf(Promise);
    });

    it("should return Uint8ClampedArray with RGB values", async () => {
      // Override Image constructor
      const originalImage = global.Image;

      class MockImage {
        src = "";
        crossOrigin = "";
        onload: (() => void) | null = null;

        constructor() {
          setTimeout(() => {
            if (this.onload) {
              this.onload();
            }
          }, 0);
        }
      }

      global.Image = MockImage as typeof Image;

      const result = await getAverageRgb("test.jpg");

      expect(result).toBeInstanceOf(Uint8ClampedArray);
      expect(result.length).toBe(3);

      // Restore Image
      global.Image = originalImage;
    });
  });
});
