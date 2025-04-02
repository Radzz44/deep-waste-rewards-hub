
import { Star, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RewardCardProps {
  id: number;
  title: string;
  description: string;
  pointsCost: number;
  image: string;
  shopName: string;
  shopLogo: string;
  isUnlocked: boolean;
  onClick: (id: number) => void;
}

const RewardCard = ({
  id,
  title,
  description,
  pointsCost,
  image,
  shopName,
  shopLogo,
  isUnlocked,
  onClick,
}: RewardCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-border bg-card",
        isUnlocked ? "opacity-100" : "opacity-70"
      )}
      onClick={() => isUnlocked && onClick(id)}
    >
      <div className="relative h-36">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div 
          className={cn(
            "absolute top-2 right-2 py-1 px-3 rounded-full flex items-center font-medium text-sm",
            isUnlocked ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          )}
        >
          <Star size={14} className="mr-1" />
          {pointsCost}
        </div>
        
        <div className="absolute bottom-2 left-2 bg-white/90 rounded-full p-1">
          <img
            src={shopLogo}
            alt={shopName}
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground">{shopName}</p>
          </div>
          <ChevronRight size={18} className="text-muted-foreground" />
        </div>
        <p className="text-xs mt-2 text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RewardCard;
