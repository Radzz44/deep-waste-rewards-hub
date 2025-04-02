
import { User, Award, Settings } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  email: string;
  points: number;
  imageUrl?: string;
}

const ProfileHeader = ({ name, email, points, imageUrl }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-24 h-24 rounded-full object-cover border-4 border-primary"
          />
        ) : (
          <div className="w-24 h-24 rounded-full eco-gradient flex items-center justify-center text-white text-3xl border-4 border-primary">
            <User size={40} />
          </div>
        )}
        
        <button className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full">
          <Settings size={16} />
        </button>
      </div>
      
      <h1 className="text-xl font-bold mt-3">{name}</h1>
      <p className="text-sm text-muted-foreground">{email}</p>
      
      <div className="flex items-center mt-2 bg-muted rounded-full px-4 py-1">
        <Award size={16} className="text-primary mr-1" />
        <span className="font-semibold">{points} points</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
