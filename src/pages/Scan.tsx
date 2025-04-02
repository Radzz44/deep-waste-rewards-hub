
import AppLayout from '@/components/layout/AppLayout';
import CameraCapture from '@/components/scan/CameraCapture';
import { Info } from 'lucide-react';

const ScanPage = () => {
  return (
    <AppLayout>
      <div className="container px-4 py-6 max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Scan Waste</h1>
          <p className="text-sm text-muted-foreground">
            Take a photo of your waste to identify it and earn points
          </p>
        </div>
        
        <CameraCapture />
        
        <div className="mt-8 bg-muted p-3 rounded-lg flex items-start">
          <Info size={20} className="text-muted-foreground mr-2 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Our AI identifies recyclable waste materials and awards points based on their reusability. Clearer photos help with accurate identification.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default ScanPage;
