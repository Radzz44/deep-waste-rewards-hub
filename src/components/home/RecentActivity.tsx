
import { ArrowUpCircle, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Activity {
  id: number;
  type: string;
  description: string;
  points: number;
  date: Date;
}

const RecentActivity = () => {
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
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="flex items-center p-3 bg-card rounded-xl shadow-sm border border-border"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center eco-gradient text-white">
              <ArrowUpCircle size={20} />
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
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
