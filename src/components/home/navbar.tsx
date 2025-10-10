"use client";

import { SidebarIcon } from "@phosphor-icons/react";
import { useSidebarStore } from "@/lib/store";
import { useContactsStore } from "@/lib/store";
import { Toggle } from "@/components/ui/toggle";
const Navbar = () => {
  const { toggleSidebar } = useSidebarStore();
  const { toggleContacts } = useContactsStore();

  return (
    <div className="bg-card border-border sticky top-0 z-10 flex h-16 items-center justify-between border-b px-4">
      <Toggle onClick={toggleSidebar}>
        <SidebarIcon weight="duotone" className="size-5" />
      </Toggle>

      <Toggle onClick={toggleContacts}>
        <SidebarIcon weight="duotone" className="size-5" />
      </Toggle>
    </div>
  );
};

export default Navbar;
