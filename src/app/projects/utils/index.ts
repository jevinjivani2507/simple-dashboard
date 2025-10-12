import { OrderStatus } from "../types";
import moment from "moment";

export const statusConfig: Record<
  OrderStatus,
  { label: string; className: string }
> = {
  IN_PROGRESS: {
    label: "In Progress",
    className: "text-blue-500 dark:text-blue-600",
  },
  COMPLETE: {
    label: "Complete",
    className: "text-purple-400 dark:text-purple-600",
  },
  PENDING: {
    label: "Pending",
    className: "   text-orange-500 dark:text-orange-600",
  },
  APPROVED: {
    label: "Approved",
    className: "text-yellow-500 dark:text-yellow-600",
  },
  REJECTED: {
    label: "Rejected",
    className: "text-red-500 dark:text-red-600",
  },
};

export const formatDate = (dateString: string): string => {
  const date = moment(dateString);
  const now = moment();

  const diffMinutes = now.diff(date, "minutes");
  const diffHours = now.diff(date, "hours");
  const diffDays = now.diff(date, "days");

  if (diffMinutes < 1) return "Just now";
  if (diffMinutes === 1) return "A minute ago";
  if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
  if (diffHours === 1) return "1 hour ago";
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;

  return date.format("MMM D, YYYY");
};
