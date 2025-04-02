
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Camera, Home, Gift, User, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Extract the path without the leading slash
    const path = location.pathname.substring(1);
    // If path is empty, it's the home page
    setActiveTab(path || 'home');
  }, [location]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(`/${tab === 'home' ? '' : tab}`);
  };

  const tabs = [
    { id: 'home', icon: <Home size={24} />, label: 'Home' },
    { id: 'scan', icon: <Camera size={24} />, label: 'Scan' },
    { id: 'rewards', icon: <Gift size={24} />, label: 'Rewards' },
    { id: 'collection', icon: <MapPin size={24} />, label: 'Collection' },
    { id: 'profile', icon: <User size={24} />, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-card border-t border-border flex items-center justify-around px-2 z-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabChange(tab.id)}
          className={cn(
            "flex flex-col items-center justify-center w-full h-full rounded-lg transition-colors",
            activeTab === tab.id
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {tab.icon}
          <span className="text-xs mt-1">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default NavBar;
