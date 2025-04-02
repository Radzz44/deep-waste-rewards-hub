
import AppLayout from '@/components/layout/AppLayout';
import RewardsSummary from '@/components/home/RewardsSummary';
import ImpactStats from '@/components/home/ImpactStats';
import RecentActivity from '@/components/home/RecentActivity';
import { Bell } from 'lucide-react';

const HomePage = () => {
  // Simulated user data - in a real app, this would come from an API or state
  const userPoints = 420;
  const nextRewardAt = 500;

  return (
    <AppLayout>
      <div className="container px-4 py-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Deep Waste</h1>
            <p className="text-sm text-muted-foreground">Recycle, Earn, Repeat</p>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-card border border-border">
            <Bell size={20} />
          </button>
        </div>

        <RewardsSummary points={userPoints} nextRewardAt={nextRewardAt} />
        
        <div className="mt-6">
          <ImpactStats />
        </div>
        
        <div className="mt-6">
          <RecentActivity />
        </div>
      </div>
    </AppLayout>
  );
};

export default HomePage;
