"use client";

import React from "react";
import { NavSection } from "./navigation-section";
import { NavItemData } from "./navigation-item";
import { NavigationIcons } from "./navigation-icons";
import { cn } from "@/lib/utils";

export interface NavSidebarProps {
  onItemClick?: (item: NavItemData) => void;
  className?: string;
  isExpanded?: boolean;
}

// Navigation data matching the image structure
const dashboardItems: NavItemData[] = [
  {
    id: "default",
    label: "Default",
    icon: NavigationIcons.default,
    href: "/dashboard",
    children: [
      {
        id: "default",
        label: "Default",
        href: "/dashboard",
      },
    ],
    isActive: true,
  },
  {
    id: "ecommerce",
    label: "eCommerce",
    icon: NavigationIcons.ecommerce,
    href: "/dashboard/ecommerce",
    children: [
      {
        id: "ecommerce",
        label: "eCommerce",
        href: "/dashboard/ecommerce",
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    icon: NavigationIcons.projects,
    href: "/dashboard/projects",
    children: [
      {
        id: "projects",
        label: "Projects",
        href: "/dashboard/projects",
      },
    ],
  },
  {
    id: "courses",
    label: "Online Courses",
    icon: NavigationIcons.courses,
    href: "/dashboard/courses",
    children: [
      {
        id: "courses",
        label: "Online Courses",
        href: "/dashboard/courses",
      },
    ],
  },
];

const pageItems: NavItemData[] = [
  {
    id: "user-profile",
    label: "User Profile",
    icon: NavigationIcons.userProfile,
    href: "/user-profile",
    children: [
      {
        id: "overview",
        label: "Overview",
        href: "/user-profile/overview",
      },
      {
        id: "projects",
        label: "Projects",
        href: "/user-profile/projects",
      },
      {
        id: "campaigns",
        label: "Campaigns",
        href: "/user-profile/campaigns",
      },
      {
        id: "documents",
        label: "Documents",
        href: "/user-profile/documents",
      },
      {
        id: "followers",
        label: "Followers",
        href: "/user-profile/followers",
      },
    ],
  },
  {
    id: "account",
    label: "Account",
    icon: NavigationIcons.account,
    href: "/account",
    children: [
      {
        id: "account",
        label: "Account",
        href: "/account",
      },
    ],
  },
  {
    id: "corporate",
    label: "Corporate",
    icon: NavigationIcons.corporate,
    href: "/corporate",
    children: [
      {
        id: "corporate",
        label: "Corporate",
        href: "/corporate",
      },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    icon: NavigationIcons.blog,
    href: "/blog",
    children: [
      {
        id: "blog",
        label: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    id: "social",
    label: "Social",
    icon: NavigationIcons.social,
    href: "/social",
    children: [
      {
        id: "social",
        label: "Social",
        href: "/social",
      },
    ],
  },
];

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
