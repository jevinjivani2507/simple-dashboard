import { statusConfig, formatDate } from "../index";
import type { OrderStatus } from "../../types";
import moment from "moment";

describe("Projects Utils", () => {
  describe("statusConfig", () => {
    it("should have configuration for all status types", () => {
      expect(statusConfig["IN_PROGRESS"]).toBeDefined();
      expect(statusConfig["COMPLETE"]).toBeDefined();
      expect(statusConfig["PENDING"]).toBeDefined();
      expect(statusConfig["APPROVED"]).toBeDefined();
      expect(statusConfig["REJECTED"]).toBeDefined();
    });

    it("should have label and className for each status", () => {
      const statuses: OrderStatus[] = [
        "IN_PROGRESS",
        "COMPLETE",
        "PENDING",
        "APPROVED",
        "REJECTED",
      ];
      statuses.forEach((status) => {
        expect(statusConfig[status]).toHaveProperty("label");
        expect(statusConfig[status]).toHaveProperty("className");
        expect(typeof statusConfig[status].label).toBe("string");
        expect(typeof statusConfig[status].className).toBe("string");
      });
    });

    it("should have correct labels", () => {
      expect(statusConfig["IN_PROGRESS"].label).toBe("In Progress");
      expect(statusConfig["COMPLETE"].label).toBe("Complete");
      expect(statusConfig["PENDING"].label).toBe("Pending");
      expect(statusConfig["APPROVED"].label).toBe("Approved");
      expect(statusConfig["REJECTED"].label).toBe("Rejected");
    });

    it("should have valid CSS classes", () => {
      const statuses: OrderStatus[] = [
        "IN_PROGRESS",
        "COMPLETE",
        "PENDING",
        "APPROVED",
        "REJECTED",
      ];
      statuses.forEach((status) => {
        const className = statusConfig[status].className;
        expect(className).toContain("text-");
        expect(className).toMatch(/text-\w+-\d+/);
      });
    });
  });

  describe("formatDate", () => {
    const now = moment();

    beforeEach(() => {
      // Mock moment to have consistent time
      jest.spyOn(moment, "now").mockReturnValue(now.valueOf());
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should return "Just now" for dates less than 1 minute ago', () => {
      const date = now.clone().subtract(30, "seconds").toISOString();
      expect(formatDate(date)).toBe("Just now");
    });

    it('should return "A minute ago" for dates exactly 1 minute ago', () => {
      const date = now.clone().subtract(1, "minute").toISOString();
      expect(formatDate(date)).toBe("A minute ago");
    });

    it("should return minutes for dates less than 60 minutes ago", () => {
      const date = now.clone().subtract(45, "minutes").toISOString();
      expect(formatDate(date)).toBe("45 minutes ago");
    });

    it('should return "1 hour ago" for dates exactly 1 hour ago', () => {
      const date = now.clone().subtract(1, "hour").toISOString();
      expect(formatDate(date)).toBe("1 hour ago");
    });

    it("should return hours for dates less than 24 hours ago", () => {
      const date = now.clone().subtract(5, "hours").toISOString();
      expect(formatDate(date)).toBe("5 hours ago");
    });

    it('should return "Yesterday" for dates exactly 1 day ago', () => {
      const date = now.clone().subtract(1, "day").toISOString();
      expect(formatDate(date)).toBe("Yesterday");
    });

    it("should return days for dates less than 7 days ago", () => {
      const date = now.clone().subtract(3, "days").toISOString();
      expect(formatDate(date)).toBe("3 days ago");
    });

    it("should return formatted date for dates more than 7 days ago", () => {
      const date = now.clone().subtract(10, "days");
      expect(formatDate(date.toISOString())).toBe(date.format("MMM D, YYYY"));
    });

    it("should return formatted date for dates more than a month ago", () => {
      const date = now.clone().subtract(45, "days");
      expect(formatDate(date.toISOString())).toBe(date.format("MMM D, YYYY"));
    });

    it("should handle date strings in different formats", () => {
      const date = now.clone().subtract(2, "hours");
      expect(formatDate(date.format("YYYY-MM-DD HH:mm:ss"))).toBe(
        "2 hours ago",
      );
    });
  });
});
