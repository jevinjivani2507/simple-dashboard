import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { XIcon } from "@phosphor-icons/react";
import { Checkbox } from "@/components/ui/checkbox";
import { OrderStatus } from "@/app/projects/types";
import { Button } from "@/components/ui/button";

interface FilterDropdownProps {
  icon: React.ReactNode;
  selectedStatuses: OrderStatus[];
  onToggleStatus: (status: OrderStatus) => void;
  onClearFilter: () => void;
  statusConfig: Record<OrderStatus, { label: string; className: string }>;
}

const allStatuses: OrderStatus[] = [
  "IN_PROGRESS",
  "COMPLETE",
  "PENDING",
  "APPROVED",
  "REJECTED",
];

export default function FilterDropdown({
  icon,
  selectedStatuses,
  onToggleStatus,
  onClearFilter,
  statusConfig,
}: FilterDropdownProps) {
  const isFilterActive = selectedStatuses.length > 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={isFilterActive ? "outline" : "ghost"}
          size="icon"
          aria-label="Filter options"
          className={cn(
            "border-border hover:bg-accent/20",
            isFilterActive && "bg-accent/30 dark:bg-accent/20",
          )}
        >
          {icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-48" align="start">
        <DropdownMenuLabel className="text-muted-foreground text-xs font-normal">
          Filter by Status
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {allStatuses.map((status) => {
          const config = statusConfig[status];
          const isChecked = selectedStatuses.includes(status);

          return (
            <DropdownMenuItem
              key={status}
              onSelect={(e) => {
                e.preventDefault();
                onToggleStatus(status);
              }}
              className="cursor-pointer"
            >
              <Checkbox
                checked={isChecked}
                onCheckedChange={() => onToggleStatus(status)}
                className="pointer-events-none"
              />
              <div className="flex items-center gap-2">
                <span className={`text-xs ${config.className}`}>●</span>
                <span>{config.label}</span>
              </div>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onClearFilter} disabled={!isFilterActive}>
          <XIcon className="size-4" />
          <span>Clear Filters</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
