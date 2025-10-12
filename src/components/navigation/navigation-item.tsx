"use client";

import React, { useState } from "react";
import { CaretRightIcon, CaretDownIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface NavItemData {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: NavItemData[];
  isActive?: boolean;
}

interface NavItemProps {
  item: NavItemData;
  level?: number;
  onItemClick?: (item: NavItemData) => void;
  className?: string;
  isExpanded?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  item,
  level = 0,
  onItemClick,
  className,
  isExpanded = true,
}) => {
  const [isItemExpanded, setIsItemExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren && isExpanded) {
      setIsItemExpanded(!isItemExpanded);
    }
    onItemClick?.(item);
  };

  // Calculate padding for alignment
  // For level 0: no extra padding
  // For level 1+: align text with parent's text
  // Parent text position = base(8) + caret(16) + ml-2(8) + icon(16) + ml-2(8) = 56px
  // Child needs paddingLeft = 56 - 8 (own ml-2) = 48px, but we add 8 in style, so 48 - 8 = 40
  const paddingLeft = level === 0 ? 0 : 48;

  return (
    <div className={cn("select-none", className)}>
      <button
        onClick={handleClick}
        className={cn(
          "hover:bg-accent flex h-8 w-full items-center rounded-sm py-1 text-sm transition-all duration-200 ease-in-out",
          item.isActive && "bg-accent text-accent-foreground",
        )}
        style={{ paddingLeft: isExpanded ? `${paddingLeft + 8}px` : "6px" }}
      >
        {/* Caret icon with animated visibility - always rendered for smooth animation */}
        {hasChildren && (
          <div
            className={cn(
              "flex h-5 shrink-0 items-center justify-center overflow-hidden transition-all duration-300 ease-in-out",
              isExpanded ? "w-5 opacity-100" : "w-0 opacity-0",
            )}
          >
            {isItemExpanded ? (
              <CaretDownIcon className="text-muted-foreground h-3 w-3 transition-transform duration-200" />
            ) : (
              <CaretRightIcon className="text-muted-foreground h-3 w-3 transition-transform duration-200" />
            )}
          </div>
        )}

        {/* Main icon - fixed position */}
        {item.icon && (
          <div
            className={cn(
              "flex size-5 shrink-0 items-center justify-center transition-all duration-300 ease-in-out",
              isExpanded && hasChildren ? "ml-2" : "",
            )}
          >
            {item.icon}
          </div>
        )}

        {/* Label - fades out before collapsing */}
        <span
          className={cn(
            "ml-2 flex-1 overflow-hidden text-left whitespace-nowrap transition-all duration-300 ease-in-out",
            isExpanded ? "opacity-100" : "w-0 opacity-0",
          )}
        >
          {item.label}
        </span>
      </button>

      {/* Children container with smooth expand/collapse animation */}
      {hasChildren && (
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isItemExpanded && isExpanded
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => (
              <NavItem
                key={child.id}
                item={child}
                level={level + 1}
                onItemClick={onItemClick}
                isExpanded={isExpanded}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
