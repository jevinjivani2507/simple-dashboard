import { OrderStatus } from "../types";
import moment from "moment";

export const statusConfig: Record<
  OrderStatus,
  { label: string; className: string }
> = {
  IN_PROGRESS: {
    label: "In Progress",
    className: "text-indigo-500 dark:text-indigo-600",
  },
  COMPLETE: {
    label: "Complete",
    className: "text-emerald-400 dark:text-emerald-600",
  },
  PENDING: {
    label: "Pending",
    className: "text-cyan-500 dark:text-cyan-600",
  },
  APPROVED: {
    label: "Approved",
    className: "text-yellow-500 dark:text-yellow-600",
  },
  REJECTED: {
    label: "Rejected",
    className: "text-gray-500 dark:text-gray-600",
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
