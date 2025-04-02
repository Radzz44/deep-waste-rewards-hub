
import AppLayout from '@/components/layout/AppLayout';
import ProfileHeader from '@/components/profile/ProfileHeader';
import StatsTabs from '@/components/profile/StatsTabs';

const ProfilePage = () => {
  // Sample user data - in a real app, this would come from an API or state
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    points: 420,
  };
  
  return (
    <AppLayout>
      <div className="container px-4 py-6 max-w-md mx-auto">
        <ProfileHeader
          name={userData.name}
          email={userData.email}
          points={userData.points}
        />
        
        <div className="mt-6">
          <StatsTabs />
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
