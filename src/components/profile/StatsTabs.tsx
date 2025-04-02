
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, ArrowUp, ShoppingBag } from 'lucide-react';
import { format } from 'date-fns';

interface Activity {
  id: number;
  type: string;
  description: string;
  points: number;
  date: Date;
}

interface Redemption {
  id: number;
  title: string;
  shopName: string;
  pointsCost: number;
  date: Date;
}

const StatsTabs = () => {
  // Sample data - in a real app, this would come from an API
  const activities: Activity[] = [
    {
      id: 1,
      type: 'Recycled',
      description: 'Plastic Bottle',
      points: 15,
      date: new Date('2023-10-10T10:30:00'),
    },
    {
      id: 2,
      type: 'Recycled',
      description: 'Paper Waste',
      points: 20,
      date: new Date('2023-10-09T14:15:00'),
    },
    {
      id: 3,
      type: 'Recycled',
      description: 'Aluminum Can',
      points: 25,
      date: new Date('2023-10-08T09:45:00'),
    },
    {
      id: 4,
      type: 'Recycled',
      description: 'Glass Bottle',
      points: 30,
      date: new Date('2023-10-07T11:20:00'),
    },
  ];

  const redemptions: Redemption[] = [
    {
      id: 1,
      title: '50% Off Coffee',
      shopName: 'Eco Cafe',
      pointsCost: 200,
      date: new Date('2023-10-05T09:15:00'),
    },
    {
      id: 2,
      title: 'Free Reusable Bag',
      shopName: 'Green Grocery',
      pointsCost: 150,
      date: new Date('2023-09-28T15:45:00'),
    },
  ];

  return (
    <Tabs defaultValue="activities" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="activities">Activities</TabsTrigger>
        <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
      </TabsList>
      
      <TabsContent value="activities" className="mt-4 space-y-3">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div 
              key={activity.id} 
              className="flex items-center p-3 bg-card rounded-xl shadow-sm border border-border"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center eco-gradient text-white">
                <ArrowUp size={20} />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{activity.type} {activity.description}</h3>
                  <span className="font-semibold text-primary">+{activity.points}</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar size={12} className="mr-1" />
                  {format(activity.date, 'MMM d, h:mm a')}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No activity yet. Start recycling to earn points!
          </div>
        )}
      </TabsContent>
      
      <TabsContent value="redemptions" className="mt-4 space-y-3">
        {redemptions.length > 0 ? (
          redemptions.map((redemption) => (
            <div 
              key={redemption.id} 
              className="flex items-center p-3 bg-card rounded-xl shadow-sm border border-border"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center ocean-gradient text-white">
                <ShoppingBag size={20} />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{redemption.title}</h3>
                  <span className="font-semibold text-muted-foreground">-{redemption.pointsCost}</span>
                </div>
                <p className="text-xs text-muted-foreground">{redemption.shopName}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar size={12} className="mr-1" />
                  {format(redemption.date, 'MMM d, h:mm a')}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No redemptions yet. Use your points to get rewards!
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default StatsTabs;
