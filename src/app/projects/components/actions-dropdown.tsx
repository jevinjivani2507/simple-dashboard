import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArchiveIcon, CopyIcon, PencilSimpleIcon } from "@phosphor-icons/react";

export default function Dropdown({ icon }: { icon: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" aria-label="Select theme">
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-32">
        <DropdownMenuItem>
          <PencilSimpleIcon weight="duotone" className="size-4" />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CopyIcon weight="duotone" className="size-4" />
          <span>Duplicate</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ArchiveIcon weight="duotone" className="size-4" />
          <span>Archive</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
