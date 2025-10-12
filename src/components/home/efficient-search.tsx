"use client";

import * as React from "react";
import { ArrowUpRightIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

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
import { dashboardItems, pageItems } from "@/constants/sidebar-tabs";

const EfficientSearch = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        className="bg-muted text-foreground placeholder:text-muted-foreground/70 inline-flex h-9 w-fit rounded-lg px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
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
          ⌘/
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages and commands..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Dashboards">
            {dashboardItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.href || "#")}
              >
                <div className="flex size-4 items-center justify-center opacity-60">
                  {item.icon}
                </div>
                <span>{item.label}</span>
                <CommandShortcut className="justify-center">
                  <ArrowUpRightIcon size={12} />
                </CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Pages">
            {pageItems.map((item) => (
              <React.Fragment key={item.id}>
                <CommandItem
                  key={item.id}
                  onSelect={() => handleSelect(item.href || "#")}
                >
                  <div className="flex size-3 items-center justify-center opacity-60">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                  {item.href && (
                    <CommandShortcut className="justify-center">
                      <ArrowUpRightIcon size={12} />
                    </CommandShortcut>
                  )}
                </CommandItem>
                {item.children && item.children.length > 0 && (
                  <>
                    {item.children.map((child) => (
                      <CommandItem
                        key={child.id}
                        onSelect={() => handleSelect(child.href || "#")}
                      >
                        <div className="flex size-3 items-center justify-center opacity-60">
                          {child.icon}
                        </div>
                        <span>{child.label}</span>
                        {child.href && (
                          <CommandShortcut className="justify-center">
                            <ArrowUpRightIcon size={12} />
                          </CommandShortcut>
                        )}
                      </CommandItem>
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default EfficientSearch;
