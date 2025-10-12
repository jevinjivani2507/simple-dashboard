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

// "use client";

// import { cn } from "@/lib/utils";
// import { motion } from "motion/react";
// import { useSidebarStore } from "@/lib/store";
// import { NavSidebar, NavItemData } from "@/components/navigation";
// import Image from "next/image";
// import { useState } from "react";

// const Sidebar = () => {
//   const { isExpanded } = useSidebarStore();
//   const [activeTab, setActiveTab] = useState<"favorites" | "recently">(
//     "favorites",
//   );

//   const handleItemClick = (item: NavItemData) => {
//     console.log("Navigation item clicked:", item);
//     // Add your navigation logic here
//     if (item.href) {
//       // Handle navigation to the href
//       console.log("Navigate to:", item.href);
//     }
//   };

//   const favoriteItems = [
//     { id: "overview", label: "Overview", icon: "•" },
//     { id: "projects", label: "Projects", icon: "•" },
//   ];

//   return (
//     <motion.div
//       className="bg-sidebar border-sidebar-border scrollbar-hide flex flex-col overflow-y-auto border-r"
//       animate={{
//         width: isExpanded ? "16rem" : "4rem",
//       }}
//       initial={{
//         width: isExpanded ? "16rem" : "4rem",
//       }}
//       transition={{
//         duration: 0.3,
//         ease: "easeInOut",
//       }}
//     >
//       {/* User Profile Section */}
//       <div className="px-2 py-4">
//         <div className="flex items-center gap-3 px-2">
//           <div className="relative size-8 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
//             <Image
//               src="https://api.dicebear.com/9.x/adventurer/png?seed=byewind"
//               alt="ByeWind"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <span
//             className={`text-foreground overflow-hidden text-base font-semibold whitespace-nowrap transition-all duration-300 ease-in-out ${
//               isExpanded ? "ml-0 w-auto opacity-100" : "ml-0 w-0 opacity-0"
//             }`}
//           >
//             ByeWind
//           </span>
//         </div>
//       </div>

//       {/* Favorites/Recently Tabs */}
//       <div
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           isExpanded ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 pt-3 pb-1">
//           <div className="flex gap-6">
//             <button
//               onClick={() => setActiveTab("favorites")}
//               className={cn(
//                 "text-sm font-normal transition-colors",
//                 activeTab === "favorites"
//                   ? "text-foreground"
//                   : "text-muted-foreground",
//               )}
//             >
//               Favorites
//             </button>
//             <button
//               onClick={() => setActiveTab("recently")}
//               className={cn(
//                 "text-sm font-normal transition-colors",
//                 activeTab === "recently"
//                   ? "text-foreground"
//                   : "text-muted-foreground",
//               )}
//             >
//               Recently
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Favorite Items */}
//       <div
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           isExpanded && activeTab === "favorites"
//             ? "max-h-[200px] opacity-100"
//             : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="space-y-1 pb-3">
//           {favoriteItems.map((item) => (
//             <button
//               key={item.id}
//               className="text-muted-foreground hover:text-foreground hover:bg-accent flex h-8 w-full items-center rounded-sm px-4 text-sm transition-all duration-200 ease-in-out"
//             >
//               <span className="bg-secondary size-1 rounded-full" />
//               <span
//                 className={`ml-2 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
//                   isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
//                 }`}
//               >
//                 {item.label}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Sidebar */}
//       <div className="flex-1 px-2 py-4">
//         <NavSidebar onItemClick={handleItemClick} isExpanded={isExpanded} />
//       </div>
//     </motion.div>
//   );
// };

// export default Sidebar;
