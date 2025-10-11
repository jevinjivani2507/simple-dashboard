"use client";

import * as React from "react";
import {
  ArrowUpRightIcon,
  MagnifyingGlassIcon,
  HouseIcon,
  ShoppingCartIcon,
  FolderIcon,
  GraduationCapIcon,
  UserCircleIcon,
  GearIcon,
  BuildingsIcon,
  NewspaperIcon,
  ChatCircleIcon,
  FileTextIcon,
  UsersIcon,
  MegaphoneIcon,
} from "@phosphor-icons/react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function Component() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        className="border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-fit rounded-md border px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <MagnifyingGlassIcon
            className="text-muted-foreground/80 -ms-1 me-3"
            size={16}
            aria-hidden="true"
          />
          <span className="text-muted-foreground/70 font-normal">Search</span>
        </span>
        <kbd className="bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
          ⌘K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages and commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Dashboards">
            <CommandItem>
              <HouseIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Default Dashboard</span>
              <CommandShortcut className="justify-center">
                <ArrowUpRightIcon size={12} />
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ShoppingCartIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>eCommerce</span>
              <CommandShortcut className="justify-center">
                <ArrowUpRightIcon size={12} />
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FolderIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Projects</span>
              <CommandShortcut className="justify-center">
                <ArrowUpRightIcon size={12} />
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GraduationCapIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Online Courses</span>
              <CommandShortcut className="justify-center">
                <ArrowUpRightIcon size={12} />
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Pages">
            <CommandItem>
              <UserCircleIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>User Profile</span>
              <CommandShortcut className="justify-center">
                <ArrowUpRightIcon size={12} />
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Account Settings</span>
              <CommandShortcut className="justify-center">
                <ArrowUpRightIcon size={12} />
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <BuildingsIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Corporate</span>
              <CommandShortcut className="justify-center">
                <ArrowUpRightIcon size={12} />
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <NewspaperIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Blog</span>
              <CommandShortcut className="justify-center">
                <ArrowUpRightIcon size={12} />
              </CommandShortcut>
            </CommandItem>
            <CommandItem>
              <ChatCircleIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Social</span>
              <CommandShortcut className="justify-center">
                <ArrowUpRightIcon size={12} />
              </CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="User Profile">
            <CommandItem>
              <FileTextIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Overview</span>
            </CommandItem>
            <CommandItem>
              <FolderIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem>
              <MegaphoneIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Campaigns</span>
            </CommandItem>
            <CommandItem>
              <FileTextIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Documents</span>
            </CommandItem>
            <CommandItem>
              <UsersIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Followers</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
