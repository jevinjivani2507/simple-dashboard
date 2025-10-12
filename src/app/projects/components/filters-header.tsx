import TooltipButton from "@/components/tooltip-button";
import { PlusIcon } from "@phosphor-icons/react";
import { FilterDropdown, SortDropdown } from "@/app/projects/components";
import { FunnelSimpleIcon, ArrowsDownUpIcon } from "@phosphor-icons/react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { statusConfig } from "@/app/projects/utils";
import { OrderStatus } from "@/app/projects/types";
import { SortingState } from "@tanstack/react-table";

const FiltersHeader = ({
  selectedStatuses,
  handleToggleStatus,
  handleClearFilter,
  handleSort,
  handleClearSort,
  sorting,
  globalFilter,
  setGlobalFilter,
}: {
  selectedStatuses: OrderStatus[];
  handleToggleStatus: (status: OrderStatus) => void;
  handleClearFilter: () => void;
  handleSort: (columnId: string, direction: "asc" | "desc") => void;
  handleClearSort: () => void;
  sorting: SortingState;
  globalFilter: string;
  setGlobalFilter: (globalFilter: string) => void;
}) => {
  return (
    <div className="bg-muted flex items-center justify-between rounded-lg px-2 py-2">
      <div className="flex items-center gap-2">
        <TooltipButton
          tooltip="Add new project"
          props={{
            variant: "ghost",
            size: "icon",
          }}
        >
          <PlusIcon />
        </TooltipButton>
        <FilterDropdown
          icon={<FunnelSimpleIcon />}
          selectedStatuses={selectedStatuses}
          onToggleStatus={handleToggleStatus}
          onClearFilter={handleClearFilter}
          statusConfig={statusConfig}
        />
        <SortDropdown
          icon={<ArrowsDownUpIcon />}
          onSort={handleSort}
          onClearSort={handleClearSort}
          currentSort={sorting[0]}
        />
      </div>
      <div className="w-64">
        <InputGroup className="border-muted-foreground/20 rounded-lg">
          <InputGroupInput
            placeholder="Search..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <InputGroupAddon>
            <MagnifyingGlassIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default FiltersHeader;
