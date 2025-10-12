"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "@/app/projects/types";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  useReactTable,
  OnChangeFn,
} from "@tanstack/react-table";
import { columns } from "@/app/projects/data/columns";

import { Button } from "@/components/ui/button";
import {
  CaretUpIcon,
  CaretDownIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";

const ProjectsTable = ({
  selectedOrders,
  sorting,
  globalFilter,
  setSorting,
  setGlobalFilter,
}: {
  selectedOrders: Order[];
  sorting: SortingState;
  globalFilter: string;
  setSorting: OnChangeFn<SortingState>;
  setGlobalFilter: OnChangeFn<string>;
}) => {
  const table = useReactTable({
    data: selectedOrders,
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
    <>
      <div className="bg-card overflow-hidden rounded-lg">
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
          <TableBody
            key={table.getState().pagination.pageIndex}
            className="animate-fade-in"
          >
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
            variant="ghost"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-8 w-8"
          >
            <CaretLeftIcon className="h-4 w-4" />
          </Button>
          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1)
            .slice(0, 5)
            .map((page) => (
              <Button
                key={page}
                variant={
                  table.getState().pagination.pageIndex === page - 1
                    ? "muted"
                    : "ghost"
                }
                size="icon"
                onClick={() => table.setPageIndex(page - 1)}
                className="h-8 w-8"
              >
                {page}
              </Button>
            ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="h-8 w-8"
          >
            <CaretRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProjectsTable;
