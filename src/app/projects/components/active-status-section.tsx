import { OrderStatus } from "@/app/projects/types";
import { statusConfig } from "@/app/projects/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { XIcon } from "@phosphor-icons/react";

const ActiveStatusSection = ({
  selectedStatuses,
  handleToggleStatus,
  handleClearFilter,
}: {
  selectedStatuses: OrderStatus[];
  handleToggleStatus: (status: OrderStatus) => void;
  handleClearFilter: () => void;
}) => {
  return selectedStatuses.length > 0 ? (
    <div className="flex items-center gap-3">
      <span className="text-muted-foreground text-sm font-medium">
        Active Filters:
      </span>
      <div className="flex flex-wrap items-center gap-2">
        {selectedStatuses.map((status) => {
          const config = statusConfig[status];
          return (
            <Badge
              key={status}
              className={cn(
                "bg-accent/20 hover:bg-accent cursor-pointer gap-1.5",
                config.className,
              )}
              onClick={() => handleToggleStatus(status)}
            >
              <span>●</span>
              <span>{config.label}</span>
              <XIcon className="h-3 w-3" />
            </Badge>
          );
        })}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClearFilter}
          className="h-7 px-2 text-xs"
        >
          Clear All
        </Button>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default ActiveStatusSection;
