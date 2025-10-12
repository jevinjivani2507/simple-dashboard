export type OrderStatus =
  | "IN_PROGRESS"
  | "COMPLETE"
  | "PENDING"
  | "APPROVED"
  | "REJECTED";

export type Order = {
  id: string;
  userId: string;
  userName: string;
  project: string;
  address: string;
  date: string; // ISO date string
  status: OrderStatus;
};
