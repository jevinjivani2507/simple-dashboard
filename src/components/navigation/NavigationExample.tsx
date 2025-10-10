"use client";

import React, { useState } from "react";
import { NavSidebar, NavItemData } from "@/components/navigation";

/**
 * Example component demonstrating how to use the modular navigation system
 * This shows how you can customize the navigation data and handle clicks
 */
export const NavigationExample: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleItemClick = (item: NavItemData) => {
    console.log("Clicked item:", item);

    // Example: Handle different types of navigation
    if (item.href) {
      // In a real app, you might use Next.js router or another navigation library
      console.log(`Navigate to: ${item.href}`);
    }

    // Example: Handle special actions
    if (item.id === "logout") {
      console.log("Logout user");
    }
  };

  return (
    <div className="bg-background h-screen border-r">
      <div className="border-b p-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-primary text-primary-foreground rounded px-3 py-1 text-sm transition-all hover:opacity-90"
        >
          {isExpanded ? "Collapse" : "Expand"} Sidebar
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "w-64" : "w-16"}`}
      >
        <div className="p-4">
          <NavSidebar onItemClick={handleItemClick} isExpanded={isExpanded} />
        </div>
      </div>
    </div>
  );
};

export default NavigationExample;
