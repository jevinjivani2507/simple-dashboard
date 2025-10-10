"use client";

import { motion } from "motion/react";
import { useSidebarStore } from "@/lib/store";
import { NavSidebar, NavItemData } from "@/components/navigation";

const Sidebar = () => {
  const { isExpanded } = useSidebarStore();

  const handleItemClick = (item: NavItemData) => {
    console.log("Navigation item clicked:", item);
    // Add your navigation logic here
    if (item.href) {
      // Handle navigation to the href
      console.log("Navigate to:", item.href);
    }
  };

  return (
    <motion.div
      className="bg-sidebar border-sidebar-border overflow-hidden border-r p-4"
      animate={{
        width: isExpanded ? "16rem" : "4rem",
      }}
      initial={{
        width: isExpanded ? "16rem" : "4rem",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <NavSidebar onItemClick={handleItemClick} isExpanded={isExpanded} />
    </motion.div>
  );
};

export default Sidebar;
