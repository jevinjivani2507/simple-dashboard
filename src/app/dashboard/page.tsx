"use client";

import React from "react";
import { motion } from "motion/react";
import { useSidebarStore } from "@/lib/store";
import AllStats from "@/components/dashboard/all-stats";
import ProjectionVsActualsChart from "@/components/dashboard/projection-vs-actuals-chart";
import RevenueChart from "@/components/dashboard/revenue-chart";
import TotalSalesChart from "@/components/dashboard/total-sales-chart";
import SellingTable from "@/components/dashboard/selling-table";
const DashboardLayout = () => {
  const { isExpanded } = useSidebarStore();

  return (
    <motion.div
      className="scrollbar-hide flex-1 overflow-auto p-6"
      animate={{
        marginLeft: isExpanded ? "0" : "0", // The sidebar handles its own width
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6 flex">
          <AllStats />
        </div>
        <div className="col-span-6 flex">
          <ProjectionVsActualsChart />
        </div>

        <div className="col-span-9">
          <RevenueChart />
        </div>
        <div className="col-span-3">
          <div className="border-border bg-card h-72 rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">Side Panel</h3>
            <p className="text-muted-foreground">Side content here</p>
          </div>
        </div>

        <div className="col-span-9 flex">
          <SellingTable />
        </div>
        <div className="col-span-3 flex">
          <TotalSalesChart />
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;
