"use client";

import React from "react";
import { motion } from "motion/react";
import { useSidebarStore } from "@/lib/store";
import AllStats from "@/components/dashboard/all-stats";

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
        <div className="col-span-6">
          <AllStats />
        </div>
        <div className="col-span-6">
          <div className="border-border bg-card h-64 rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">Metric Card 2</h3>
            <p className="text-muted-foreground">Dashboard content here</p>
          </div>
        </div>

        <div className="col-span-9">
          <div className="border-border bg-card h-72 rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">Main Chart</h3>
            <p className="text-muted-foreground">Chart content here</p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="border-border bg-card h-72 rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">Side Panel</h3>
            <p className="text-muted-foreground">Side content here</p>
          </div>
        </div>

        <div className="col-span-9">
          <div className="border-border bg-card h-80 rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">Data Table</h3>
            <p className="text-muted-foreground">Table content here</p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="border-border bg-card h-80 rounded-lg border p-4">
            <h3 className="mb-2 text-lg font-semibold">Activity Feed</h3>
            <p className="text-muted-foreground">Activity content here</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;
