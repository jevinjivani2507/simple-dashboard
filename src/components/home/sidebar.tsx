"use client";

import { motion } from "motion/react";
import { useSidebarStore } from "@/lib/store";
import {
  NavSidebar,
  NavItemData,
  TabSection,
  TabItem,
} from "@/components/navigation";
import ProfileSection from "@/components/navigation/profile-section";
import { tabsData } from "@/constants/sidebar-tabs";

const Sidebar = () => {
  const { isExpanded } = useSidebarStore();

  const handleItemClick = (item: NavItemData) => {
    console.log("Navigation item clicked:", item);
    if (item.href) {
      console.log("Navigate to:", item.href);
    }
  };

  const handleTabItemClick = (item: TabItem) => {
    console.log("Tab item clicked:", item);
  };

  return (
    <motion.div
      className="bg-sidebar border-sidebar-border flex h-screen flex-col overflow-hidden border-r"
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
      <div className="flex-shrink-0 p-4">
        <ProfileSection isExpanded={isExpanded} userName="ByeWind" />

        <TabSection
          tabs={tabsData}
          isExpanded={isExpanded}
          onItemClick={handleTabItemClick}
        />
      </div>

      <div className="scrollbar-hide flex-1 overflow-y-auto px-4 pb-4">
        <NavSidebar onItemClick={handleItemClick} isExpanded={isExpanded} />
      </div>
    </motion.div>
  );
};

export default Sidebar;
