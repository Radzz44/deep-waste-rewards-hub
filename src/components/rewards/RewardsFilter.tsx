
import { useState } from 'react';
import { cn } from '@/lib/utils';

type FilterOption = {
  id: string;
  label: string;
};

interface RewardsFilterProps {
  options: FilterOption[];
  onFilterChange: (filter: string) => void;
}

const RewardsFilter = ({ options, onFilterChange }: RewardsFilterProps) => {
  const [activeFilter, setActiveFilter] = useState<string>(options[0].id);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleFilterChange(option.id)}
          className={cn(
            "px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors",
            activeFilter === option.id
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default RewardsFilter;
