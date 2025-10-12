"use client";

import { useState } from "react";
import { SortingState } from "@tanstack/react-table";
import { motion } from "motion/react";
import { useSidebarStore } from "@/lib/store";
import { Order, OrderStatus } from "./types";
import { orders } from "./data";
import {
  ProjectsTable,
  FiltersHeader,
  ActiveStatusSection,
} from "@/app/projects/components";
import { fadeIn } from "@/lib/animations-utils";

const ProjectsPage = () => {
  const { isExpanded } = useSidebarStore();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState<OrderStatus[]>([]);
  const [selectedOrders, setSelectedOrders] = useState<Order[]>(orders);

  const handleSort = (columnId: string, direction: "asc" | "desc") => {
    setSorting([{ id: columnId, desc: direction === "desc" }]);
  };

  const handleClearSort = () => {
    setSorting([]);
  };

  const handleToggleStatus = (status: OrderStatus) => {
    const currentSelectedStatuses = selectedStatuses.includes(status)
      ? selectedStatuses.filter((s) => s !== status)
      : [...selectedStatuses, status];

    setSelectedStatuses(currentSelectedStatuses);

    const getNewSelectedOrders = (statuses: OrderStatus[]) => {
      if (statuses.length === 0) return orders;
      return orders.filter((order) => statuses.includes(order.status));
    };

    const newSelectedOrders = getNewSelectedOrders(currentSelectedStatuses);

    setSelectedOrders(newSelectedOrders);
  };

  const handleClearFilter = () => {
    setSelectedStatuses([]);
  };

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
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Projects</h1>
        </div>

        <FiltersHeader
          selectedStatuses={selectedStatuses}
          handleToggleStatus={handleToggleStatus}
          handleClearFilter={handleClearFilter}
          handleSort={handleSort}
          handleClearSort={handleClearSort}
          sorting={sorting}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />

        {/* Active Filters Display */}
        <ActiveStatusSection
          selectedStatuses={selectedStatuses}
          handleToggleStatus={handleToggleStatus}
          handleClearFilter={handleClearFilter}
        />

        {/* Table */}
        <ProjectsTable
          selectedOrders={selectedOrders}
          sorting={sorting}
          globalFilter={globalFilter}
          setSorting={setSorting}
          setGlobalFilter={setGlobalFilter}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
