
import { Recycle, Droplets, TreePine } from 'lucide-react';

interface ImpactStat {
  icon: JSX.Element;
  value: string;
  label: string;
  color: string;
}

const ImpactStats = () => {
  const stats: ImpactStat[] = [
    {
      icon: <Recycle size={20} />,
      value: '24 kg',
      label: 'Waste Recycled',
      color: 'eco-gradient',
    },
    {
      icon: <Droplets size={20} />,
      value: '128 L',
      label: 'Water Saved',
      color: 'ocean-gradient',
    },
    {
      icon: <TreePine size={20} />,
      value: '3.2 kg',
      label: 'CO₂ Reduced',
      color: 'eco-gradient',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Your Environmental Impact</h2>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="rounded-xl p-3 bg-card shadow-sm border border-border flex flex-col items-center text-center"
          >
            <div className={`w-9 h-9 rounded-full flex items-center justify-center ${stat.color} text-white mb-2`}>
              {stat.icon}
            </div>
            <p className="font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStats;
