import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  HashIcon,
  UserIcon,
  FolderIcon,
  CalendarIcon,
  CircleDashedIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  XIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface SortOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface SortDropdownProps {
  onSort: (columnId: string, direction: "asc" | "desc") => void;
  onClearSort: () => void;
  icon: React.ReactNode;
  currentSort?: { id: string; desc: boolean } | null;
}

const sortOptions: SortOption[] = [
  { id: "id", label: "Order ID", icon: <HashIcon className="size-4" /> },
  { id: "userName", label: "User", icon: <UserIcon className="size-4" /> },
  { id: "project", label: "Project", icon: <FolderIcon className="size-4" /> },
  { id: "date", label: "Date", icon: <CalendarIcon className="size-4" /> },
  {
    id: "status",
    label: "Status",
    icon: <CircleDashedIcon className="size-4" />,
  },
];

export default function SortDropdown({
  onSort,
  onClearSort,
  icon,
  currentSort,
}: SortDropdownProps) {
  const isSortActive = !!currentSort;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={isSortActive ? "outline" : "ghost"}
          size="icon"
          aria-label="Sort options"
          className={cn(
            "border-border hover:bg-accent/20",
            isSortActive && "bg-accent/30 dark:bg-accent/20",
          )}
        >
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-52" align="start">
        {sortOptions.map((option) => {
          const isActive = currentSort?.id === option.id;
          const isAsc = isActive && !currentSort?.desc;
          const isDesc = isActive && currentSort?.desc;

          return (
            <div key={option.id} className="flex items-center">
              <DropdownMenuItem
                className="flex-1 cursor-default"
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                {option.icon}
                <span className={isActive ? "font-semibold" : ""}>
                  {option.label}
                </span>
              </DropdownMenuItem>
              <div className="flex border-l">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 rounded-sm ${isAsc ? "bg-accent/20" : ""}`}
                  onClick={() => onSort(option.id, "asc")}
                >
                  <SortAscendingIcon className="size-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-8 w-8 rounded-sm ${isDesc ? "bg-accent/20" : ""}`}
                  onClick={() => onSort(option.id, "desc")}
                >
                  <SortDescendingIcon className="size-3.5" />
                </Button>
              </div>
            </div>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onClearSort}>
          <XIcon className="size-4" />
          <span>Clear Sort</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
