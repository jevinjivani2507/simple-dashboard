"use client";

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  CalendarIcon,
  DotsThreeIcon,
  CaretUpIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useSidebarStore } from "@/lib/store";
import { fadeIn } from "@/lib/animations-utils";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import moment from "moment";
import { Order, OrderStatus } from "./types";
import { orders } from "./data";

const statusConfig: Record<OrderStatus, { label: string; className: string }> =
  {
    IN_PROGRESS: {
      label: "In Progress",
      className: "text-blue-500",
    },
    COMPLETE: { label: "Complete", className: "text-green-500" },
    PENDING: { label: "Pending", className: "   text-orange-500" },
    APPROVED: {
      label: "Approved",
      className: "text-yellow-500",
    },
    REJECTED: { label: "Rejected", className: "text-red-500" },
  };

const formatDate = (dateString: string): string => {
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

const columns: ColumnDef<Order>[] = [
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
        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-200">
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
        <CalendarIcon className="h-4 w-4" />
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
        <Badge
          className={cn("font-medium", config.className, "bg-transparent")}
        >
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
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <DotsThreeIcon className="h-4 w-4" />
      </Button>
    ),
    size: 60,
  },
];

const ProjectsPage = () => {
  const { isExpanded } = useSidebarStore();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data: orders,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <motion.div
      className="scrollbar-hide flex-1 overflow-auto p-6"
      animate={{
        marginLeft: isExpanded ? "0" : "0",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.div {...fadeIn(0)} className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Order List</h1>
        </div>

        {/* Action Buttons and Search */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <span className="text-lg">+</span>
            </Button>
            <Button variant="outline" size="icon">
              <span className="text-lg">☰</span>
            </Button>
            <Button variant="outline" size="icon">
              <span className="text-lg">↕</span>
            </Button>
          </div>
          <div className="w-64">
            <input
              type="text"
              placeholder="Search"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-card overflow-hidden rounded-lg border">
          <Table className="table-fixed">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-transparent">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      style={{ width: `${header.getSize()}px` }}
                    >
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <div
                          className="flex cursor-pointer items-center gap-2 select-none"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          <div className="flex flex-col">
                            {header.column.getIsSorted() === "asc" ? (
                              <CaretUpIcon className="h-3 w-3" />
                            ) : header.column.getIsSorted() === "desc" ? (
                              <CaretDownIcon className="h-3 w-3" />
                            ) : (
                              <div className="flex flex-col opacity-30">
                                <CaretUpIcon className="-mb-1 h-3 w-3" />
                                <CaretDownIcon className="h-3 w-3" />
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="h-8 w-8"
            >
              &lt;
            </Button>
            {Array.from({ length: table.getPageCount() }, (_, i) => i + 1)
              .slice(0, 5)
              .map((page) => (
                <Button
                  key={page}
                  variant={
                    table.getState().pagination.pageIndex === page - 1
                      ? "default"
                      : "outline"
                  }
                  size="icon"
                  onClick={() => table.setPageIndex(page - 1)}
                  className="h-8 w-8"
                >
                  {page}
                </Button>
              ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="h-8 w-8"
            >
              &gt;
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
