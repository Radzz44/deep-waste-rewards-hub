
import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import RewardsFilter from '@/components/rewards/RewardsFilter';
import RewardCard from '@/components/rewards/RewardCard';
import { Star, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const RewardsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { toast } = useToast();
  
  // Sample data - in a real app, this would come from an API
  const userPoints = 420;
  
  const filterOptions = [
    { id: 'all', label: 'All Rewards' },
    { id: 'food', label: 'Food & Drinks' },
    { id: 'retail', label: 'Retail' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'eco', label: 'Eco Products' },
  ];
  
  const rewards = [
    {
      id: 1,
      title: '50% Off Coffee',
      description: 'Get 50% off on any coffee drink at Eco Cafe',
      pointsCost: 300,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500&auto=format&fit=crop',
      shopName: 'Eco Cafe',
      shopLogo: 'https://via.placeholder.com/50',
      category: 'food',
    },
    {
      id: 2,
      title: '20% Discount',
      description: 'Get 20% off on all products at Green Grocery',
      pointsCost: 400,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500&auto=format&fit=crop',
      shopName: 'Green Grocery',
      shopLogo: 'https://via.placeholder.com/50',
      category: 'retail',
    },
    {
      id: 3,
      title: 'Free Reusable Bag',
      description: 'Get a free reusable shopping bag',
      pointsCost: 200,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=500&auto=format&fit=crop',
      shopName: 'Eco Store',
      shopLogo: 'https://via.placeholder.com/50',
      category: 'eco',
    },
    {
      id: 4,
      title: '10% Off Electronics',
      description: 'Get 10% off on eco-friendly electronics',
      pointsCost: 600,
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=500&auto=format&fit=crop',
      shopName: 'Tech Green',
      shopLogo: 'https://via.placeholder.com/50',
      category: 'electronics',
    },
  ];
  
  const filteredRewards = activeFilter === 'all' 
    ? rewards 
    : rewards.filter(reward => reward.category === activeFilter);
  
  const handleRewardClick = (id: number) => {
    const reward = rewards.find(r => r.id === id);
    if (!reward) return;
    
    if (userPoints >= reward.pointsCost) {
      toast({
        title: "Reward Redeemed!",
        description: `You've redeemed ${reward.title} for ${reward.pointsCost} points.`,
      });
    } else {
      toast({
        title: "Not Enough Points",
        description: `You need ${reward.pointsCost - userPoints} more points to redeem this reward.`,
        variant: "destructive",
      });
    }
  };
  
  return (
    <AppLayout>
      <div className="container px-4 py-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Rewards</h1>
            <p className="text-sm text-muted-foreground">Redeem your points for rewards</p>
          </div>
          <div className="flex items-center bg-muted px-3 py-1 rounded-full">
            <Star size={16} className="text-primary mr-1" />
            <span className="font-semibold">{userPoints}</span>
          </div>
        </div>
        
        <RewardsFilter options={filterOptions} onFilterChange={setActiveFilter} />
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          {filteredRewards.length > 0 ? (
            filteredRewards.map((reward) => (
              <RewardCard
                key={reward.id}
                id={reward.id}
                title={reward.title}
                description={reward.description}
                pointsCost={reward.pointsCost}
                image={reward.image}
                shopName={reward.shopName}
                shopLogo={reward.shopLogo}
                isUnlocked={userPoints >= reward.pointsCost}
                onClick={handleRewardClick}
              />
            ))
          ) : (
            <div className="col-span-2 flex flex-col items-center justify-center py-8 text-center">
              <AlertCircle size={36} className="text-muted-foreground mb-2" />
              <p className="text-muted-foreground">No rewards found in this category</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default RewardsPage;
