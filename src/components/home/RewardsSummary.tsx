
import { Award, Recycle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface RewardsSummaryProps {
  points: number;
  nextRewardAt: number;
}

const RewardsSummary = ({ points, nextRewardAt }: RewardsSummaryProps) => {
  const progress = Math.min((points / nextRewardAt) * 100, 100);
  
  return (
    <div className="rounded-xl p-4 bg-card shadow-sm border border-border">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center eco-gradient text-white">
            <Award size={20} />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-foreground">Your Points</h3>
            <p className="text-2xl font-bold text-primary">{points}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Next reward at</p>
          <p className="font-semibold">{nextRewardAt} points</p>
        </div>
      </div>
      <div className="mt-3">
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground mt-1">
          {nextRewardAt - points} points to unlock new rewards
        </p>
      </div>
    </div>
  );
};

export default RewardsSummary;
