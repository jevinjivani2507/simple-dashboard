"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  href?: string;
}

export interface Tab {
  id: string;
  label: string;
  items: TabItem[];
}

export interface TabSectionProps {
  tabs: Tab[];
  isExpanded: boolean;
  onItemClick?: (item: TabItem) => void;
  className?: string;
}

export const TabSection = ({
  tabs,
  isExpanded,
  onItemClick,
  className,
}: TabSectionProps) => {
  const router = useRouter();
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || "");

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  const handleItemClick = (item: TabItem) => {
    if (item.href) {
      router.push(item.href);
    }
    onItemClick?.(item);
  };

  return (
    <div
      className={cn(
        "w-full transition-all duration-300",
        className,
        isExpanded ? "mb-6" : "",
      )}
    >
      {/* Tab Headers */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-2 pt-3 pb-1">
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={cn(
                  "text-muted-foreground/80 text-sm font-medium tracking-wider transition-colors duration-300 ease-in-out",
                  activeTabId === tab.id ? "opacity-100" : "opacity-50",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded && activeTab
            ? "max-h-[200px] opacity-100"
            : "max-h-0 opacity-0",
        )}
      >
        <div className="space-y-1 pb-3">
          {activeTab?.items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="text-muted-foreground hover:text-foreground hover:bg-muted flex h-8 w-full items-center rounded-sm px-4 text-sm transition-all duration-200 ease-in-out"
            >
              <span className="bg-secondary size-1 rounded-full" />
              <span
                className={cn(
                  "ml-2 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out",
                  isExpanded ? "w-auto opacity-100" : "w-0 opacity-0",
                )}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
