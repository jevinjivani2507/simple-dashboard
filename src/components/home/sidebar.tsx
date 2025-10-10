"use client";

import { motion } from "motion/react";
import { useSidebarStore } from "@/lib/store";

const Sidebar = () => {
  const { isExpanded } = useSidebarStore();

  return (
    <motion.div
      className="bg-sidebar border-sidebar-border min-w-16 overflow-hidden border-r p-4"
      animate={{
        width: isExpanded ? "16rem" : "4rem", // w-64 : w-16
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="space-y-4"></div>
    </motion.div>
  );
};

export default Sidebar;
