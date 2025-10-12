"use client";

import React from "react";
import { NavSection } from "./navigation-section";
import { NavItemData } from "./navigation-item";
import { dashboardItems, pageItems } from "@/constants/sidebar-tabs";
import { cn } from "@/lib/utils";

export interface NavSidebarProps {
  onItemClick?: (item: NavItemData) => void;
  className?: string;
  isExpanded?: boolean;
}

export const NavSidebar: React.FC<NavSidebarProps> = ({
  onItemClick,
  className,
  isExpanded = true,
}) => {
  return (
    <div
      className={cn(
        "flex h-full flex-col transition-all duration-300",
        className,
      )}
    >
      <NavSection
        title="Dashboards"
        items={dashboardItems}
        onItemClick={onItemClick}
        isExpanded={isExpanded}
      />
      <NavSection
        title="Pages"
        items={pageItems}
        onItemClick={onItemClick}
        isExpanded={isExpanded}
      />
    </div>
  );
};
