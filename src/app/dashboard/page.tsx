"use client";

import React from "react";
import { motion } from "motion/react";
import { useSidebarStore } from "@/lib/store";
import { fadeIn } from "@/lib/animations-utils";
import {
  AllStats,
  ProjectionVsActualsChart,
  RevenueChart,
  TotalSalesChart,
  SellingTable,
  RevenueByLocations,
} from "@/app/dashboard/components";

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
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <motion.div {...fadeIn(0)} className="col-span-6 flex">
          <AllStats />
        </motion.div>
        <motion.div {...fadeIn(0)} className="col-span-6 flex">
          <ProjectionVsActualsChart />
        </motion.div>

        <motion.div {...fadeIn(1)} className="col-span-9 flex">
          <RevenueChart />
        </motion.div>
        <motion.div {...fadeIn(1)} className="col-span-3 flex">
          <RevenueByLocations />
        </motion.div>

        <motion.div {...fadeIn(2)} className="col-span-9 flex">
          <SellingTable />
        </motion.div>
        <motion.div {...fadeIn(2)} className="col-span-3 flex">
          <TotalSalesChart />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;
