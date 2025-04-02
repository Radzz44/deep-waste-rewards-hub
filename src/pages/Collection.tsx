
import AppLayout from '@/components/layout/AppLayout';
import RequestCollection from '@/components/collection/RequestCollection';

const CollectionPage = () => {
  return (
    <AppLayout>
      <div className="container px-4 py-6 max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Waste Collection</h1>
          <p className="text-sm text-muted-foreground">
            Schedule a smart bin collection at your location
          </p>
        </div>
        
        <RequestCollection />
      </div>
    </AppLayout>
  );
};

export default CollectionPage;
