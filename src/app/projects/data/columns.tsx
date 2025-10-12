import moment from "moment";
import { ColumnDef } from "@tanstack/react-table";
import { Order } from "../types";
import { Checkbox } from "@/components/ui/checkbox";
import { ActionsDropdown } from "@/app/projects/components";
import { CalendarBlankIcon, DotsThreeIcon } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { OrderStatus } from "../types";
import { formatDate, statusConfig } from "../utils";

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    size: 50,
    enableSorting: false,
  },
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
    size: 120,
  },
  {
    accessorKey: "userName",
    header: "User",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="bg-muted relative h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={`https://api.dicebear.com/9.x/adventurer/png?seed=${row.original.userId}`}
            alt={row.getValue("userName")}
            fill
            className="object-cover"
          />
        </div>
        <span>{row.getValue("userName")}</span>
      </div>
    ),
    size: 200,
  },
  {
    accessorKey: "project",
    header: "Project",
    size: 180,
  },
  {
    accessorKey: "address",
    header: "Address",
    size: 220,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <CalendarBlankIcon className="h-4 w-4" />
        <span>{formatDate(row.getValue("date"))}</span>
      </div>
    ),
    size: 160,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as OrderStatus;
      const config = statusConfig[status];
      return (
        <Badge className={cn(config.className, "text-md bg-transparent")}>
          <span className="mr-1">●</span>
          {config.label}
        </Badge>
      );
    },
    size: 150,
  },
  {
    id: "actions",
    cell: () => (
      <ActionsDropdown icon={<DotsThreeIcon className="h-4 w-4" />} />
    ),
    size: 60,
  },
];
