"use client";

import { useState } from "react";
import {
  SidebarIcon,
  StarIcon,
  BellIcon,
  ClockCounterClockwiseIcon,
  SunIcon,
} from "@phosphor-icons/react";
import { useSidebarStore } from "@/lib/store";
import { useContactsStore } from "@/lib/store";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import Search from "@/components/search";

const Navbar = () => {
  const { toggleSidebar } = useSidebarStore();
  const { toggleContacts } = useContactsStore();

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-card border-border sticky top-0 z-10 flex h-16 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2">
        <Toggle onClick={toggleSidebar}>
          <SidebarIcon weight="duotone" className="size-5" />
        </Toggle>
        <Toggle onClick={toggleFavorites}>
          <StarIcon
            className="size-5"
            weight={isFavorite ? "duotone" : "regular"}
          />
        </Toggle>
      </div>

      <div className="flex items-center gap-2">
        <Search />
        <Button variant="ghost" size="icon">
          <SunIcon weight="duotone" className="size-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ClockCounterClockwiseIcon weight="duotone" className="size-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <BellIcon weight="duotone" className="size-5" />
        </Button>
        <Toggle onClick={toggleContacts}>
          <SidebarIcon weight="duotone" className="size-5" />
        </Toggle>
      </div>
    </div>
  );
};

export default Navbar;
